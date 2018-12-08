##
#
# This module will generate an code.json file inside the src/_data directory
# BEFORE the site is generated. The code.json can therefor be used inside
# page templating syntax by using the variables
# `data.code.<properties>`
#
##

module RunMeOnce

    def self.process(site, payload)
      return if @processed
        input_dir ||= File.expand_path('../_releases', __dir__)
        file_paths ||= Dir.glob(File.join(input_dir, '**', '*.json')).sort
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

        path = 'src/_data/code.json'
        FileUtils.mkdir_p(File.dirname(path))
        File.open(path, 'w') do |f|
            f.write(JSON.pretty_generate(output))
        end
      @processed = true
    end
  end
  
  Jekyll::Hooks.register :site, :after_init do |site, payload|
    RunMeOnce.process(site, payload)
  end