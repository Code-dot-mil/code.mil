require 'spec_helper'

describe Yell::Adapters do

  context ".new" do
    it "should accept an adapter instance" do
      stdout = Yell::Adapters::Stdout.new
      adapter = Yell::Adapters.new(stdout)

      expect(adapter).to eq(stdout)
    end

    it "should accept STDOUT" do
      expect(Yell::Adapters::Stdout).to receive(:new).with(anything)

      Yell::Adapters.new(STDOUT)
    end

    it "should accept STDERR" do
      expect(Yell::Adapters::Stderr).to receive(:new).with(anything)

      Yell::Adapters.new(STDERR)
    end

    it "should raise an unregistered adapter" do
      expect {
        Yell::Adapters.new(:unknown)
      }.to raise_error(Yell::AdapterNotFound)
    end
  end

  context ".register" do
    let(:type) { :test }
    let(:klass) { double }

    it "should allow to being called from :new" do
      Yell::Adapters.register(type, klass)
      expect(klass).to receive(:new).with(anything)

      Yell::Adapters.new(type)
    end
  end
end
