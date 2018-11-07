# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

gem 'annotate'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'graphql'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.1'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :test do
  gem 'database_cleaner'
  gem 'faker'
  gem 'shoulda-matchers'
end

group :development, :test do
  gem 'awesome_print'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'hirb'
  gem 'pry-rails'
  gem 'pry-stack_explorer'
  gem 'rspec-rails'
end

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'graphiql-rails'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'rubocop', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
