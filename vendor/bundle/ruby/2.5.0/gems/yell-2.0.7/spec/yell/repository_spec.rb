require 'spec_helper'

describe Yell::Repository do
  let(:name) { 'test' }
  let(:logger) { Yell.new(:stdout) }

  subject { Yell::Repository[name] }

  context ".[]" do
    it "should raise when not set" do
      expect { subject }.to raise_error(Yell::LoggerNotFound)
    end

    context "when logger with :name exists" do
      let!(:logger) { Yell.new(:stdout, :name => name) }

      it "should eq(logger)" do
        expect(subject).to eq(logger)
      end
    end

    context "given a Class" do
      let!(:logger) { Yell.new(:stdout, :name => "Numeric") }

      it "should raise with the correct :name when logger not found" do
        expect(Yell::LoggerNotFound).to(
          receive(:new).with(String).and_call_original
        )

        expect {
          Yell::Repository[String]
        }.to raise_error(Yell::LoggerNotFound)
      end

      it "should return the logger" do
        expect(Yell::Repository[Numeric]).to eq(logger)
      end

      it "should return the logger when superclass has it defined" do
        expect(Yell::Repository[Integer]).to eq(logger)
      end
    end
  end

  context ".[]=" do
    before { Yell::Repository[name] = logger }
    it "should eq(logger)" do
      expect(subject).to eq(logger)
    end
  end

  context ".[]= with a named logger" do
    let!(:logger) { Yell.new(:stdout, :name => name) }
    before { Yell::Repository[name] = logger }

    it "should eq(logger)" do
      expect(subject).to eq(logger)
    end
  end

  context ".[]= with a named logger of a different name" do
    let(:other) { 'other' }
    let(:logger) { Yell.new(:stdout, :name => other) }
    before { Yell::Repository[name] = logger }

    it "should add logger to both repositories" do
      expect(Yell::Repository[name]).to eq(logger)
      expect(Yell::Repository[other]).to eq(logger)
    end
  end

  context "loggers" do
    let(:loggers) { { name => logger } }
    subject { Yell::Repository.loggers }
    before { Yell::Repository[name] = logger }

    it "should eq(loggers)" do
      expect(subject).to eq(loggers)
    end
  end

end

