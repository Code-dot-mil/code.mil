'use strict';

// projects const placeholder for a fetch call to https://code.mil/code.json
const projects = {
  "agency": "DOD",
  "version": "2.0.0",
  "measurementType": {
    "method": "projects"
  },
  "releases": [
    {
      "organization": "DDS",
      "name": "Code.mil",
      "description": "An experiment in open source at the Depratment of Defense. The goal is to foster open collaboration with the developer community around the world on DoD open source projects.",
      "tags": [

      ],
      "contact": {
        "email": "code@dds.mil",
        "name": "Defense Digital Service"
      },
      "status": "Production",
      "vcs": "git",
      "languages": [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "repositoryURL": "https://github.com/Code-dot-mil/code.mil",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/Code-dot-mil/code.mil/blob/master/LICENSE.md",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 80,
      "date": {
        "created": "2017-02-01",
        "lastModified": "2018-02-08T13:00-04:00",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "organization": "NCI Agency",
      "name": "ANET",
      "description": "The Advisor Network (ANET) is a tool to track relationships between advisors and advisees. ANET was initially built by the Defense Digital Service in support of the USFOR-A and Resolute Support mission to train, advise, and assist the Afghan government.",
      "tags": [
        "advisor",
        "network"
      ],
      "contact": {
        "email": "Vassil.iordanov@ncia.nato.int",
        "name": "Vassil Iordanov"
      },
      "status": "Production",
      "vcs": "git",
      "languages": [
        "Java",
        "JavaScript"
      ],
      "repositoryURL": "https://github.com/NCI-Agency/anet",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/NCI-Agency/anet/blob/candidate/LICENSE.md",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 1,
      "date": {
        "created": "2017-02-12",
        "lastModified": "2018-01-23T15:00-04:00",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "name": "The U.S. Army Research Laboratory (ARL) Software Release Process for Unrestricted Public Release",
      "organization": "US Army Research Laboratory",
      "description": "This document provides procedures that ARL Government personnel MUST follow when releasing software source code and software-related material to the public, and for accepting software-related contributions from the general public.",
      "repositoryURL": "https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions",
      "openSourceProject": 0,
      "governmentWideReuseProject": 1,
      "tags": [
        "policy"
      ],
      "contact": {
        "email": "usarmy.adelphi.rdecom-arl.mbx.ARL-Open-Source-policy@mail.mil"
      },
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions/blob/master/LICENSE.txt",
            "name": "CC0"
          }
        ],
        "usageType": "openSource"
      },
      "status": "Production",
      "vcs": "git",
      "repository": "https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions",
      "homepage": "https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions",
      "downloadURL": "https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions",
      "languages": [

      ],
      "partners": [

      ],
      "exemption": null,
      "exemptionText": "No exemption requested",
      "updated": {
        "lastCommit": "2017-02-28",
        "metadataLastUpdated": "2017-02-28",
        "lastModified": "2017-02-28"
      },
      "laborHours": 1
    },
    {
      "name": "ARL_Topologies",
      "organization": "US Army Research Laboratory",
      "description": "ARL_Topologies is an extensible topology optimization program meant to be both a research platform and usable in general.",
      "tags": [
        "policy"
      ],
      "contact": {
        "email": "raymond.a.wildman.civ@mail.mil"
      },
      "status": "Development",
      "vcs": "git",
      "downloadURL": "https://github.com/USArmyResearchLab/ARL_Topologies",
      "repositoryURL": "https://github.com/USArmyResearchLab/ARL_Topologies",
      "homepageURL": "https://github.com/USArmyResearchLab/ARL_Topologies",
      "languages": [

      ],
      "partners": [

      ],
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/USArmyResearchLab/ARL_Topologies/blob/master/LICENSE.txt",
            "name": "CC0"
          }
        ],
        "usageType": "openSource",
        "exemptionText": null
      },
      "laborHours": 500,
      "version": "1.0.0",
      "date": {
        "created": "2017-09-06",
        "lastModified": "2017-09-06",
        "metadataLastUpdated": "2017-09-06"
      },
      "disclaimerText": "",
      "disclaimerURL": ""
    },
    {
      "name": "U.S. Army Research Laboratory (ARL) Discrete Chemical Compound Space Optimization (DCCSO)",
      "organization": "US Army Research Laboratory",
      "description": "ARL DCCSO provides a framework for (constrained) optimization of molecular properties over a combinatorial set of molecules. ",
      "tags": [
        "constrained optimization",
        "chemistry"
      ],
      "contact": {
        "email": "berend.c.rinderspacher.civ@mail.mil"
      },
      "status": "Production",
      "vcs": "git",
      "downloadURL": "https://github.com/USArmyResearchLab/DCCSO",
      "repositoryURL": "https://github.com/USArmyResearchLab/DCCSO",
      "homepageURL": "https://github.com/USArmyResearchLab/DCCSO",
      "languages": [
        "C++"
      ],
      "partners": [

      ],
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/USArmyResearchLab/DCCSO/blob/master/LICENSE",
            "name": "CC0"
          },
          {
            "URL": "http://apache.org/licenses/LICENSE-2.0",
            "name": "Apache 2.0"
          }
        ],
        "usageType": "openSource",
        "exemptionText": null
      },
      "laborHours": 2080,
      "version": "1.0.0",
      "date": {
        "created": "2017-09-30",
        "lastModified": "2017-09-30",
        "metadataLastUpdated": "2017-09-30"
      },
      "disclaimerText": "",
      "disclaimerURL": ""
    },
    {
      "status": "Production",
      "vcs": "git",
      "name": "Dshell",
      "description": "An extensible network forensic analysis framework. Enables rapid development of plugins to support the dissection of network packet captures.",
      "contact": {
        "email": " ",
        "name": ""
      },
      "tags": [
        "dshell",
        "network",
        "forensic",
        "analysis",
        "framework"
      ],
      "languages": [
        "Python"
      ],
      "repositoryURL": "https://github.com/USArmyResearchLab/Dshell",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/USArmyResearchLab/Dshell/blob/master/LICENSE.txt",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 1,
      "date": {
        "created": "2014-12-17T11:04:00Z",
        "lastModified": "2017-11-16T12:25:00Z",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "organization": "NRL",
      "name": "Tracker Component Library",
      "description": "This is a collection of Matlab functions that are useful in the development of target tracking algorithms.",
      "tags": [
        "C",
        "C++",
        "MATLAB"
      ],
      "contact": {
        "name": "David Crouse",
        "email": "david.crouse@nrl.navy.mil"
      },
      "status": "Production",
      "vcs": "git",
      "languages": [
        "MATLAB",
        "C",
        "C++"
      ],
      "repositoryURL": "https://github.com/USNavalResearchLaboratory/TrackerComponentLibrary",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/USNavalResearchLaboratory/TrackerComponentLibrary/blob/master/LICENSE.txt",
            "name": "public domain"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 1,
      "date": {
        "created": "2017-02-02",
        "lastModified": "2018-06-06",
        "metadataLastUpdated": "2018-06-18"
      }
    },
    {
      "status": "Production",
      "vcs": "git",
      "repoURL": "https://github.com/deptofdefense/eMCM",
      "name": "eMCM",
      "description": "Search and browse interface for the Military Courts-martial Manual.",
      "contact": {
        "email": "code@dds.mil",
        "name": "DDS"
      },
      "tags": [
        "search",
        "browse",
        "interface",
        "military",
        "courts",
        "martial",
        "manual"
      ],
      "languages": [
        "HTML",
        "JavaScript",
        "CSS"
      ],
      "repositoryURL": "https://github.com/deptofdefense/eMCM",
      "homepageURL": "http://mcm.mil",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/deptofdefense/eMCM/blob/master/LICENSE.md",
            "name": "AGPL"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 1,
      "date": {
        "created": "2016-12-14",
        "lastModified": "2017-10-10T16:12:00Z",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "name": "Move.mil",
      "repositoryURL": "https://github.com/deptofdefense/move.mil",
      "description": "The entry point website to the Defense Personal Property System (DPS).",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/deptofdefense/move.mil/blob/master/LICENSE.md",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 3000,
      "tags": [
        "Defense Personal Property System",
        "US Transportation Command",
        "USTRANSCOM",
        "Defense Digital Service",
        "DDS",
        "Ruby",
        "Ruby on Rails"
      ],
      "contact": {
        "email": "move.mil@dds.mil"
      },
      "organization": "Defense Digital Service",
      "status": "Production",
      "vcs": "git",
      "homepageURL": "https://move.mil",
      "languages": [
        "Ruby",
        "Ruby on Rails",
        "HTML",
        "Sass",
        "JavaScript"
      ],
      "relatedCode": [
        {
          "name": "uswds-rails",
          "URL": "https://github.com/jgarber623/uswds-rails"
        }
      ],
      "reusedCode": [
        {
          "name": "US Web Design System",
          "URL": "https://designsystem.digital.gov"
        }
      ],
      "date": {
        "created": "2017-04-19",
        "lastModified": "2018-02-12",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "organization": "DISA",
      "name": "Real Time Forwarding Network - Military",
      "description": "On demand private connectivity through commercial carriers",
      "tags": [

      ],
      "contact": {
        "email": "david.j.stern.civ@mail.mil",
        "name": "David Stern"
      },
      "status": "Production",
      "vcs": "git",
      "languages": [
        "Python",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "repositoryURL": "https://github.com/deptofdefense/rtfn-mil",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/deptofdefense/rtfn-mil/blob/master/LICENSE",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 224,
      "date": {
        "created": "2016-10-01",
        "lastModified": "2018-02-13T13:00-04:00",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "organization": "Air Force",
      "name": "Salvaging Static Analysis (SalSA)",
      "description": "The hope is that this project allows for the analyst to automate the static analysis process and quickly triage malware based on a robust set of homebuilt rules based on current white-papers in industry.",
      "tags": [

      ],
      "contact": {
        "email": "aaron.reyes.5@us.af.mil",
        "name": "Aaron Reyes"
      },
      "status": "Production",
      "vcs": "git",
      "languages": [
        "Python"
      ],
      "repositoryURL": "https://github.com/deptofdefense/salsa",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/deptofdefense/salsa/blob/master/LICENSE.md",
            "name": "MIT"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 248,
      "date": {
        "created": "2017-08-01",
        "lastModified": "2017-12-21T13:00-04:00",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "organization": "NGA",
      "name": "Conduit",
      "description": "Conduit is a curation tool that allows anyone to collect articles of interest from multiple feeds, make formatting changes, comments on articles on the fly then group selected items into \"books\" to target particular readers.",
      "tags": [
        "Content curation",
        "NGA",
        "Angular",
        "AngularJS"
      ],
      "contact": {
        "email": "conduit@nga.mil"
      },
      "status": "Development",
      "vcs": "git",
      "languages": [
        "Javascript",
        "HTML",
        "CSS"
      ],
      "repositoryURL": "https://github.com/ngageoint/conduit",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/ngageoint/conduit/blob/master/LICENSE",
            "name": "The Unlicense"
          }
        ],
        "usageType": "openSource"
      },
      "laborHours": 500,
      "date": {
        "created": "2016-11-01",
        "lastModified": "2018-03-16T13:00-04:00",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    },
    {
      "name": "mymove",
      "repositoryURL": "https://github.com/transcom/mymove",
      "description": "Personal Property Prototype",
      "permissions": {
        "licenses": [
          {
            "URL": "https://github.com/transcom/mymove/blob/master/LICENSE.md",
            "name": "MIT"
          }
        ],
        "usageType": "openSource",
        "exemptionText": null
      },
      "laborHours": 2400,
      "tags": [
        "Defense Personal Property System",
        "US Transportation Command",
        "USTRANSCOM",
        "Defense Digital Service",
        "DDS",
        "Go",
        "React",
        "Redux"
      ],
      "contact": {
        "email": "afds@dds.mil"
      },
      "organization": "US Transportation Command",
      "status": "Development",
      "vcs": "git",
      "homepageURL": "https://move.mil",
      "languages": [
        "Go",
        "JavaScript"
      ],
      "reusedCode": [
        {
          "name": "US Web Design System",
          "URL": "https://designsystem.digital.gov"
        }
      ],
      "date": {
        "created": "2017-12-18",
        "lastModified": "2018-02-13",
        "metadataLastUpdated": "2018-03-15T20:31:00Z"
      }
    }
  ]
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.project.name}</h1>
        <h4>{this.props.project.organization}</h4>
        <p>{this.props.project.description}</p>
      </div>
    )
  }
}

class ProjectsApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Projects</h3>
        <ProjectList projects={projects.releases} />
      </div>
    );
  }
}

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        {this.props.projects.map((item, i) => (
          <ProjectCard
            project={item}
            key={i}
          />
        ))}

      </div>
    );
  }
}

ReactDOM.render(
  <ProjectsApp />,
  document.getElementById('browse-projects')
);