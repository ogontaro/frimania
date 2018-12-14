Pry.config.color = true
Pry.config.prompt = proc do |obj, _, _pry_|
  version = ''
  version << "\001\e[0;31m\002"
  version << "Ruby:#{RUBY_VERSION}"
  version << "\001\e[0m\002"
  version << ' - ' if defined? Rails
  version << "\001\e[0;31m\002"
  version << "Rails:#{Rails.version}" if defined? Rails
  version << "\001\e[0m\002"
  version << ' - '
  "#{version}#{Pry.config.prompt_name}(#{Pry.view_clip(obj)})> "
end

# Awsome Print 設定
begin
  require 'awesome_print'
  Pry.config.print = proc { |output, value| output.puts value.ai }
rescue LoadError
  puts 'no awesome_print :('
end

# Hirb設定
begin
  require 'hirb'
rescue LoadError
  puts 'no hirb :('
end

if defined? Hirb
  # Slightly dirty hack to fully support in-session Hirb.disable/enable toggling
  Hirb::View.instance_eval do
    def enable_output_method
      @output_method = true
      @old_print = Pry.config.print
      Pry.config.print = proc do |*args|
        Hirb::View.view_or_page_output(args[1]) || @old_print.call(*args)
      end
    end

    def disable_output_method
      Pry.config.print = @old_print
      @output_method = nil
    end
  end

  Hirb.enable
end

# pry-byebug 設定
Pry::Commands.command(/^$/, 'repeat last command') do
  _pry_.run_command Pry.history.to_a.last
end
if defined?(PryByebug)
  Pry.commands.alias_command 's', 'step'
  Pry.commands.alias_command 'n', 'next'
  Pry.commands.alias_command 'f', 'finish'
  Pry.commands.alias_command 'c', 'continue'
end

# pry-stack_explorer 設定
Pry.commands.alias_command 'bt', 'show-stack' if defined?(PryStackExplorer)
