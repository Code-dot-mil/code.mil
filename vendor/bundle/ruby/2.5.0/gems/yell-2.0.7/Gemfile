source "http://rubygems.org"

# Specify your gem's dependencies in yell.gemspec
gemspec

group :development, :test do
  gem "rake"

  gem 'rspec-core', '~> 3'
  gem 'rspec-expectations'
  gem 'rspec-mocks'
  gem 'rspec-its'

  if RUBY_VERSION < "1.9"
    gem 'timecop', '0.6.0'
    gem 'activesupport', '~> 3'
  else
    gem 'timecop'
    gem 'activesupport'

    gem 'byebug'
  end

  gem 'simplecov', :require => false, :platform => :ruby_20
  gem 'coveralls', :require => false, :platform => :ruby_20
end

