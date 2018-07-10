require 'json'

module Jekyll
  module CodeGovInventory
    class Generator < Jekyll::Generator
      safe true
      priority :low

      def generate(site)
        raise "No JSON files found in `#{input_dir}`!" unless file_paths.any?

        page = PageWithoutAFile.new(site, __dir__, '', 'code.json')
        page.content = page_content

        site.pages << page
      end

      private

      def input_dir
        @input_dir ||= File.expand_path('../_releases', __dir__)
      end

      def file_paths
        @file_paths ||= Dir.glob(File.join(input_dir, '**', '*.json')).sort
      end

      def page_content
        output = {
          agency: 'DOD',
          version: '2.0.0',
          measurementType: {
            method: 'projects'
          },
          releases: []
        }

        file_paths.each do |file_path|
          output[:releases] << JSON.parse(File.read(file_path))
        end

        JSON.pretty_generate(output)
      end
    end
  end
end
