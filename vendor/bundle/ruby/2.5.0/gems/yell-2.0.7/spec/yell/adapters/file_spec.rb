require 'spec_helper'

describe Yell::Adapters::File do
  let(:devnull) { File.new('/dev/null', 'w') }

  before do
    allow(File).to receive(:open) { devnull }
  end

  it { should be_kind_of(Yell::Adapters::Io) }

  context "#stream" do
    subject { Yell::Adapters::File.new.send(:stream) }

    it { should be_kind_of(File) }
  end

  context "#write" do
    let(:logger) { Yell::Logger.new }
    let(:event) { Yell::Event.new(logger, 1, "Hello World") }

    context "default filename" do
      let(:filename) { File.expand_path "#{Yell.env}.log" }
      let(:adapter) { Yell::Adapters::File.new }

      it "should print to file" do
        expect(File).to(
          receive(:open).
            with(filename, File::WRONLY|File::APPEND|File::CREAT) { devnull }
        )

        adapter.write(event)
      end
    end

    context "with given :filename" do
      let(:filename) { fixture_path + '/filename.log' }
      let(:adapter) { Yell::Adapters::File.new(:filename => filename) }

      it "should print to file" do
        expect(File).to(
          receive(:open).
            with(filename, File::WRONLY|File::APPEND|File::CREAT) { devnull }
        )

        adapter.write(event)
      end
    end

    context "with given :pathname" do
      let(:pathname) { Pathname.new(fixture_path).join('filename.log') }
      let(:adapter) { Yell::Adapters::File.new( :filename => pathname ) }

      it "should accept pathanme as filename" do
        expect(File).to(
          receive(:open).
            with(pathname.to_s, File::WRONLY|File::APPEND|File::CREAT) { devnull }
        )

        adapter.write(event)
      end
    end

    context "#sync" do
      let(:adapter) { Yell::Adapters::File.new }

      it "should sync by default" do
        expect(devnull).to receive(:sync=).with(true)

        adapter.write(event)
      end

      it "pass the option to File" do
        adapter.sync = false

        expect(devnull).to receive(:sync=).with(false)

        adapter.write(event)
      end
    end
  end

end

