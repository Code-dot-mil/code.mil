require 'spec_helper'

describe Yell::Formatter do
  let(:logger) { Yell::Logger.new(:stdout, :name => 'Yell') }
  let(:message) { "Hello World!" }
  let(:event) { Yell::Event.new(logger, 1, message) }
  let(:time) { Time.now }

  let(:pattern) { "%m" }
  let(:formatter) { Yell::Formatter.new(pattern) }

  let(:output) { formatter.call(event) }

  before do
    Timecop.freeze(time)
  end

  describe "patterns" do
    context "%m" do
      let(:pattern) { "%m" }

      it "returns correctly" do
        expect(output).to eq("#{event.messages.join(' ')}\n")
      end
    end

    context "%l" do
      let(:pattern) { "%l" }

      it "returns correctly" do
        expect(output).to eq("#{Yell::Severities[event.level][0,1]}\n")
      end
    end

    context "%L" do
      let(:pattern) { "%L" }

      it "returns correctly" do
        expect(output).to eq("#{Yell::Severities[event.level]}\n")
      end
    end

    context "%d" do
      let(:pattern) { "%d" }

      it "returns correctly" do
        expect(output).to eq("#{event.time.iso8601}\n")
      end
    end

    context "%p" do
      let(:pattern) { "%p" }

      it "returns correctly" do
        expect(output).to eq("#{event.pid}\n")
      end
    end

    context "%P" do
      let(:pattern) { "%P" }

      it "returns correctly" do
        expect(output).to eq("#{event.progname}\n")
      end
    end

    context "%t" do
      let(:pattern) { "%t" }

      it "returns correctly" do
        expect(output).to eq("#{event.thread_id}\n")
      end
    end

    context "%h" do
      let(:pattern) { "%h" }

      it "returns correctly" do
        expect(output).to eq("#{event.hostname}\n")
      end
    end

    context ":caller" do
      let(:_caller) { [nil, nil, "/path/to/file.rb:123:in `test_method'"] }

      before do
        allow(event).to receive(:file) { "/path/to/file.rb" }
        allow(event).to receive(:line) { "123" }
        allow(event).to receive(:method) { "test_method" }
      end

      context "%F" do
        let(:pattern) { "%F" }

        it "returns correctly" do
          expect(output).to eq("/path/to/file.rb\n")
        end
      end

      context "%f" do
        let(:pattern) { "%f" }

        it "returns correctly" do
          expect(output).to eq("file.rb\n")
        end
      end

      context "%M" do
        let(:pattern) { "%M" }

        it "returns correctly" do
          expect(output).to eq("test_method\n")
        end
      end

      context "%n" do
        let(:pattern) { "%n" }

        it "returns correctly" do
          expect(output).to eq("123\n")
        end
      end
    end

    context "%N" do
      let(:pattern) { "%N" }

      it "returns correctly" do
        expect(output).to eq("Yell\n")
      end
    end
  end

  describe "presets" do
    context "NoFormat" do
      let(:pattern) { Yell::NoFormat }

      it "Retrns correctly" do
        expect(output).to eq("Hello World!\n")
      end
    end

    context "DefaultFormat" do
      let(:pattern) { Yell::DefaultFormat }

      it "returns correctly" do
        expect(output).to eq("#{time.iso8601} [ INFO] #{$$} : Hello World!\n")
      end
    end

    context "BasicFormat" do
      let(:pattern) { Yell::BasicFormat }

      it "returns correctly" do
        expect(output).to eq("I, #{time.iso8601} : Hello World!\n")
      end
    end

    context "ExtendedFormat" do
      let(:pattern) { Yell::ExtendedFormat }

      it "Returns correctly" do
        expect(output).to eq("#{time.iso8601} [ INFO] #{$$} #{Socket.gethostname} : Hello World!\n")
      end
    end
  end

  describe "Exception" do
    let(:message) { StandardError.new("This is an Exception") }

    before do
      allow(message).to receive(:backtrace) { ["backtrace"] }
    end

    it "returns correctly" do
      expect(output).to eq("StandardError: This is an Exception\n\tbacktrace\n")
    end
  end

  describe "Hash" do
    let(:message) { {:test => 'message'} }

    it "Returns correctly" do
      expect(output).to eq("test: message\n")
    end
  end

  describe "custom message modifiers" do
    let(:formatter) do
      Yell::Formatter.new(pattern) { |f| f.modify(String) { |m| "Modified! #{m}" } }
    end

    it "Returns correctly" do
      expect(output).to eq("Modified! #{message}\n")
    end
  end
end
