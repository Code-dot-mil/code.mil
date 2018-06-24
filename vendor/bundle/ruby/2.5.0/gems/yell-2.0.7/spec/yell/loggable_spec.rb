require 'spec_helper'

class LoggableFactory
  include Yell::Loggable
end

describe Yell::Loggable do
  let(:factory) { LoggableFactory.new }

  it "responds with logger" do
    expect(factory).to respond_to(:logger)
  end

  it "should make a lookup in the Yell::Repository" do
    expect(Yell::Repository).to(
      receive(:[]).with(LoggableFactory)
    )

    factory.logger
  end
end
