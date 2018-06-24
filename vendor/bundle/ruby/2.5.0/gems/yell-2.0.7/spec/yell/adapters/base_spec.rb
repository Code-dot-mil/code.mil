require 'spec_helper'

describe Yell::Adapters::Base do

  context "initialize" do
    context ":level" do
      let(:level) { Yell::Level.new(:warn) }

      it "should set the level" do
        adapter = Yell::Adapters::Base.new(:level => level)

        expect(adapter.level).to eq(level)
      end

      it "should set the level when block was given" do
        adapter = Yell::Adapters::Base.new { |a| a.level = level }

        expect(adapter.level).to eq(level)
      end
    end
  end

  context "#write" do
    let(:logger) { Yell::Logger.new }
    let(:adapter) { Yell::Adapters::Base.new(:level => 1) }

    it "should delegate :event to :write!" do
      event = Yell::Event.new(logger, 1, "Hello World!")
      expect(adapter).to receive(:write!).with(event)

      adapter.write(event)
    end

    it "should not write when event does not have the right level" do
      event = Yell::Event.new(logger, 0, "Hello World!")
      expect(adapter).to_not receive(:write!)

      adapter.write(event)
    end
  end

end

