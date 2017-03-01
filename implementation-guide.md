# Defense Digital Service Recommendations for Open Source DoD Projects

Version 0.0.1

28 February 2017

PROJECT STATUS: THIS DOCUMENT IS A DRAFT FOR DISCUSSION, PLEASE PARTICIPATE
IN THIS PROJECT AT https://github.com/deptofdefense/code.mil

REMAINING WORK TO DO:

- [ ] This document makes vague references to "DoD Legal" and other
      organizations. These should be updated to "your agency's legal
      department" and similar.
- [ ] Wording is used consistent with RFC 2119 such as MUST and SHOULD.
      However, this document is a recommendation not a policy. Therefore
      these words should be replaced with lower case "should".
- [ ] All links, footnote references and glossary entries should be checked.
- [ ] The Defense Digital Service does not speak for the Department of
      Defense, any mention here of DoD thinking and priorities should be
      reworded to be more humble and should be clearly non-authoritative.
- [ ] The role of the Defense Digital Service in supporting the DoD should be
      more clearly and concretely defined in the summary.
- [ ] Defense Digital Service should provide contact information and specific
      points of contact for this project.
- [ ] These markdown files should be converted to HTML so this site can be
      published on code.mil. Use Jekyll to convert markdown to html and use
      the CSS and templates provided by https://standards.usa.gov/page-templates/

# Summary

This document provides general recommendations for U.S. Department of Defense
project managers to assist them in releasing software source code and software-
related material to the public, and for accepting software-related
contributions from the general public. This document is largely based on
[The U.S. Army Research Laboratory (ARL) Software Release Process for Unrestricted Public Release](https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions/blob/master/README.md)

This document is published by the Defense Digital Service, an agency team of
the U.S. Digital Service, which is part of the Executive Office of the
President. DoD project managers are welcome to contact the Defense Digital
Service for specific advise about how this recommendation applies to you.

# Table of contents

[TOC]

# Goals and rationale

The goal of this recommendation is to both clarify how software developed by
DoD personnel may be released to the public and encourage DoD personnel to do
so, while remaining firmly within the legal and regulatory requirements of the
United States and the DoD.  These goals are in some ways conflicting, which
is why the process described in this document may seem bureaucratic and
onerous.  This chapter explains why publishing software is important and some
of the legal and regulatory constraints on doing so.

## Why releasing software is important

Software has become an integral part of modern research.  It is used in
everything from simulation and modeling, to data gathering and analysis.  In
many cases, the only way to assimilate the details of research published in
various technical papers is by analyzing the software used in the research. As
a result, research that has its source code published has a significantly
greater impact on the public than research that does not.  Published source
code accomplishes the following:

* Allows external researchers to analyze and verify that the software is
  correct, which helps prove the claims in any accompanying papers are valid.
* Attracts public attention.
* Reduces the barrier to entry for others to join in on the research.  As a
  result, collaborations are formed as others want to learn more and build on
  an organization's work.
* If the software becomes dominant, then the organization that owns it becomes
  the de-facto leader in the field, and all others follow their lead.

Conversely, when software is not published, the following are true:

* Claims in papers based on the software cannot be verified, potentially
  leading to doubts in the claims.
* Barriers to collaboration are raised significantly:
    * Published research may be ignored, because external researchers do not
      fully understand it.
    * New researchers must "reinvent the wheel" by writing their own software.
* The DoD may lose its leadership position to others solely due to others
  having published their code first.

The Defense Digital Service has recognized these facts and, to ensure that DoD
remains a leader rather than a follower, has dedicated resources to assisting
DoD agencies in understanding and implementing best practices for publishing
DoD software to the world.  However, DoD is not a private entity and MUST obey
numerous laws and regulations when releasing any material to the public. These
recommendations are intended to protect sensitive material from inadvertent
release, protect the Intellectual Property (IP) rights of DoD, and prevent DoD
from accidentally trespassing on the rights of others.

### Issues related to releasing source code

The DoD faces a number of issues when defining a software release process.
Legal and regulatory issues are discussed in **Legal analysis - software
protection & release mechanisms**, below, while other issues are summarized
here.

#### OPSEC and security

Organizations within the Department of Defense (DoD), MUST be able to properly
evaluate information that is proposed for publication to ensure no sensitive
information is accidentally released.  This includes software. Since it is
possible to accidentally violate various laws with even a seemingly trivial
change<sup>[1](#Footnote_1)</sup>, it is critical that all changes be
reviewed by competent personnel before release. This step is intended to
protect DoD personnel from the repercussions of such a release by reducing the
chances of it occurring in the first place.

Moreover, just as aggregating unclassified information may raise its
classification level, combining a set of changes into a whole may also raise
its classification level.  This is why any review MUST consider the software
as a whole, not just the portion that changed.

#### Intellectual property issues

DoD project managers must consider intellectual property concerns.  This can
cause significant legal challenges if not correctly addressed, both when DoD
accidentally releases valuable IP without protecting it and when DoD
accidentally trespasses on the rights of others.  There are three main types of
IP rights that DoD project managers MUST consider for software release:
trademark, copyright, and patent rights.

Trademarks are intended to prevent consumer confusion over who is the source
of goods and services.  Thus, the name given to software can become a valuable
piece of IP, particularly as the user community starts to associate the
software with DoD.  Trademark misuse can take a number of forms.  Improper or
unauthorized use can imply to a consumer that a trademark owner is providing
or endorsing a product when they are not.  Provided no such implication is
made when using trademarks owned by others, DoD should be relatively safe.
More on this can be found in **Legal analysis - software protection & release
mechanisms**, below.  To help protect DoD IP, all DoD-developed software SHOULD
use the name of the publishing agency, or a recognized abbreviation, in its
name.

Copyright is another form of IP that can give owners a method of control over
their works.  Works generated by non-Governmental persons or Government
employees acting outside of their official duties automatically have copyright
attached to them.  This means that any outside contribution to a Government
software project will not be owned by the Government unless the copyright is
assigned to the Government.  Because of this, unless a contract exists between
the Government and the outside entity, the outside entity can claim at least
part ownership of the project and make additional demands of the Government,
which may lead to a project being shut down.

Thus far, the Government has had the following options to protect itself
against these problems:

* Refuse to share software with entities not covered by a Cooperative Research
  and Development Agreement (CRADA), Cooperative Agreement (CA), or another
  similar vehicle.
* Refuse all outside contributions.
* Arrange for a contractor to author and own the work, and then assign
  copyright to the Government.

The process in this document outlines a new option, and as such, requires
careful consideration of copyright implications.

Patents are another method of protecting IP rights.  If software is released
by DoD without adequate review, DoD's patent rights may be impacted.  For
instance, if contractors or other collaborators have co-invented a
"software-related invention"<sup>[2](#Footnote_2)</sup>, they have the right
to pursue a patent first. Contractors may be legally permitted to patent the
software, preventing others from using it.  In this case, DoD SHOULD NOT
release the software to the public under this process.  If a project will
eventually be released under this process, developers SHOULD consult with DoD
Legal to determine the best course of action to take with regard to any
contractors or outside contributors.  If this is not done, then at some later
date, developers may find that there are patents that effectively prevent DoD
from releasing the software to the public<sup>[3](#Footnote_3)</sup>.

In addition, unless this process is followed, DoD will not be waiving its
patent rights; instead, the right to pursue patent protection falls back to
the inventors (i.e., DoD employees who have created a "software-related
invention").  This can lead to legal complications that DoD would rather
avoid.

#### Liability and fitness for purpose

A major difference between software and a journal paper or other presentation
is that software is effectively a machine.  As such, there are concerns about
fitness for purpose, as well as the liability incurred, should the software
not meet its stated capabilities.  Releasing software without an adequate
license or contract may leave both the authors of the software and DoD open to
liability issues that could be avoided.

## Release rights

The most complicated aspect of a software release is usually determining if
there are adequate rights held by the Government to perform a release to the
public.  If the software does not yet exist but there is public release
intention, it is advantageous to establish adequate rights in advance,
particularly for works developed with contractor involvement.

The first question to consider is whether the software or related material
should be released to the public.  While there are considerable collaborative
benefits that have the potential to reduce acquisition costs for the
Government, there are also potential new costs to consider and risks to
mitigate.  For example, DoD software in active use that is converted into an
open-source project can reasonably expect to receive externally developed
software improvements, but there will be additional information assurance (IA)
requirements to review before integrating those contributions.  To release
software, a competent employee MUST decide that there is an overall expected
benefit to the Government to perform the release.

The second question to consider is whether or not the software is suitable for
public release.  If this is not possible, then the software cannot be released
under the process in this document.  Contact DoD Legal and DoD Security with
the specifics of the project to see if there are changes that can be made that
will allow it to be published.  The following is a non-exhaustive list
illustrating why some software and related material face complications in
releasing it to the public due to law, regulation, or policy.  Software that
falls into these categories will require further scrutiny.  Consult with DoD
Legal to determine if it is possible to release the software.

The third question involves the rights of others.  Copyright attaches to works
when they are created<sup>[5](#Footnote_5)</sup>; if DoD does not own the
copyright to a work, it MUST obtain the rights to release the material before
it may do so.  If a software project does not yet exist, then there are no
copyright, authorship or licensing issues preventing release.  However, if
what is being prepared for release already exists, a thorough review to
ascertain origination, provenance, and licensing MUST be conducted to ensure
that the rights of others are not trespassed.

If the work was developed solely by Government employees as part of their
official duties, then there are no copyright concerns and the Government has
the right to release the work.  If there are any contractors or other external
parties involved, they may have rights that prevent the Government from
releasing and/or redistributing their contributions without their permission.
If there are any third-party libraries, applications, or data that are
incorporated into the work, there MUST be appropriate license and/or rights to
distribute them.

When works are developed by a mixture of Government employees and Government
contractors, determining who has the right to release the software to the
public as open source depends on what contract clauses are in effect.  Consult
with DoD Legal to determine what clauses are in effect and what options there
are to release the software.

# Release instructions

These instructions MUST be followed when DoD personnel release software to, or
accept contributions from, the general public.  If a project does not yet have
any software associated with it (such as when a project is being initially
formulated) and the project is intended to be released to the general public,
then this process MUST still be followed.

## Major reviews

The major review process MUST be followed if any of the following are true:

* This is the first release of the project.
* The project's scope has changed sufficiently that any of the principal
  developers (PDs), their OPSEC officers, or anyone in their chains of command
  believe a new one ought to be filed.
* It has been more than 1 year since the last time a major review has been
  done and the project is still active (material is being published to the
  public).
* The PDs feel they have accomplished something of note and wish to get credit
  for it in their performance metrics.

### Informal approval

Before developer(s) release software, they MUST obtain informal approval from
their supervisor(s).  If their supervisors do not approve release of the
software, then the software MUST NOT be released.  Do not continue with this
process.  When deciding if a project can be released, review the requirements
of RELEASE RIGHTS.  The requirements in that chapter MUST be met before any
software or related materials are released.

### Code cleanup and release preparation

Fast-moving projects often accumulate useless, nonfunctional, or otherwise
undesirable code and other material that needs to be cleaned up.  Before
moving forward with the formal portions of the process, the project MUST be
cleaned up to ensure it meets certain minimum standards.  Remember that a
formal review can only be done on what is actually being released, so cleaning
up the code after the formal review is not an option.  If a project is being
formulated, but does not yet have any code associated with it, this section
SHOULD be used as a guide for how to write the software.

This section applies to everything that is being released, including any older
commits in any repositories.  By design, repositories preserve history, which
can include material that should not be published.  It is the responsibility
of the project's developers to ensure that both the current code and any
history in any repositories that are proposed for release have been properly
scrubbed before the material is reviewed for release.

Software that is released to the public is similar to a publication and SHOULD
be treated like one.  The author(s) MUST ensure that there is no embarrassing,
disparaging, or otherwise unprofessional language in what is released.
Language that would not be used in a professional journal MUST not be used in
software.  Direct any questions about this to the DoD Public Affairs Office
(PAO).

Where possible, it is wise to follow best practices in software engineering.
Because of the wide variety of programming languages in use, project goals,
etc., DoD wants to avoid forcing a single process on any developers or group.
For this reason, Defense Digital Service recommends a minimal set of
requirements and provides some best practice suggestions.  Individual
implementation of the voluntary portions is recommended as they may have an
effect on impact and metrics.

Unless a project is required to follow other guidelines, the guidelines
described in the latest Semantic Versioning guidelines (http://semver.org/)
SHOULD be followed when setting the version number for any release.  A file
MAY be created in the top-level directory called "VERSION."  If the "VERSION"
file is created, then it MUST be a plain-text file in either ASCII or UTF-8
encodings.  The file MUST contain the version number of the release and MUST
NOT contain anything else.  By following this guideline, automated systems are
more likely to be able to determine if the project has been updated and how
significant those updates are simply by parsing the "VERSION" file.

The license to be used depends on whether or not the project has copyright
attached to it.  Works generated solely by Government employees in the course
of their duties do not have any copyright attached to them.  Works produced
with non-Government persons or organizations may have copyright attached.  If
there is uncertainty about the copyright status of a project, DoD Legal SHOULD
be consulted to determine the legal state of the project and determine which
license to use.

If the project does not have copyright, the Creative Commons Zero 1.0
Universal (CC0 1.0) Public Domain Dedication MUST be used.  Follow the
instructions in that section for how to use it.

If the project has copyright, any license that ARL Legal approves of MAY be
used.  It is RECOMMENDED that the Apache 2.0 license
(http://www.apache.org/licenses/LICENSE-2.0) be used.

Unless the guidelines the project is following require otherwise, the long
form of any license used SHOULD be in a file called LICENSE in the top-level
of the project directory.  For any LICENSE file, the file MUST be a plain-text
file in either ASCII or UTF-8 encoding.  The README file (described below)
MUST state the name of the file that contains the complete
license<sup>[6](#Footnote_6)</sup>.  If the project has a webpage, the license
being used MUST be stated somewhere on the webpage, with a link pointing to
where the file containing the license can be found.

All contributions to the project MUST be done under the license and the
contributions MUST be irrevocable.  Questions about this can be directed to
DoD Legal for clarification.

A "README" file MUST be created at the top level of the directory with at
least the following in it:

* The intended purpose of the software.
* A note pointing to the license or contract covering the software.
* If there is no "VERSION" file, the version number of the release SHOULD be
  included.
* At least some basic documentation on how to build and use the software.

The "README" file MUST be a plain-text file in either ASCII or UTF-8 encoding.

While only the "README" file is mandatory, other documentation is highly
desirable.  This can include comments in the source code, high-level design
documentation, etc.  There are many methods and tools to support this type of
documentation.  Where reasonable, please document both high- and low-level
design details, as well as how the software should be used.

Example code is also a form of documentation.  If the project is a library, it
can be useful to provide small, complete, and well-documented programs that
illustrate how to use the software.  If possible, refer to publications and
projects that used or referred to this code; they can become additional
examples of how to use the code, as well as testimonials for why the code
should be used.

Unit tests are strongly RECOMMENDED.  They can not only increase confidence
that the code was written correctly, but they can also convince a user that
the code is behaving as expected on the system on which it is installed.  This
will increase the likelihood that others will be willing to use the code,
making it wise to include unit tests in the project. In addition, unit tests
can serve as examples of how to use the code; this can be invaluable when a
user is trying to understand the documentation.

For legal reasons, all language talking about the project MUST be prefixed
with the agency releasing the project.  For example, if a project is named
WhizBang by the Army Research Laboratory, then all literature in the package
SHOULD refer to it as for "ARL WhizBang" or the "ARL WhizBang
project."

### Obtain your agency's invention evaluation committee (IEC) approval

The DoD may have IP interests in the software.  Before it can be released, the
IEC MUST determine that it is in the best interest of the Government and ARL
to waive any IP rights that ARL might have and release it to the public.  To
do so, the PD MUST inform the current chair of the IEC (or the chair's
delegate) of the intention to release the software by sending the chair a
digitally signed email that contains the following:

* An abstract describing the software, its purpose and the goals for releasing
  it.
* A list of all software-related inventions that the PD and his or her
  supervisor believe are contained in the work<sup>[7](#Footnote_7)</sup>.
* A statement that, in the opinion of the PD and his or her supervisor, all
  IP, including the listed inventions, should be irrevocably placed in the
  public domain.

If the chair (or the chair's delegate) agrees that DoD should waive any patent
or other IP interests DoD may have and that the software should be put into
the public domain, then the chair (or the chair's delegate) will reply back
with a digitally signed email with a statement similar to the following:

`<<Software name>> is to be dedicated to the public domain for promoting its
commercial and non-commercial use.  It is not intended to become the subject
of any patent application or license.  All intellectual property rights DoD
may be able to assert or establish are hereby waived.`

If the PD has received approval from IEC chair (or the chair's delegate), then
the PD MAY continue with the rest of this process.

If the IEC chair (or the chair's delegate) believes that DoD has IP interests
that DoD wants protected, then the PD and the chair (or the chair's delegate)
MUST discuss the issues to determine how to move forward.  This discussion MAY
be performed by email, telephone, or any other convenient and legal means.
Records of the final determination MUST be kept by the PD.  If it is
determined to be in the best interests of DoD and the Government to seek
patent protection, then the rest of this process does not apply.  Do not
continue with the rest of this process.

To determine the appropriate person to contact within the IEC, consult DoD
Legal.

This step MAY be done in parallel with the steps described below.

### Intellectual property review

Although DoD MAY choose to waive DoD's rights to any IP established in
software, if an author has incorporated contributions from others, those
contributors may have rights to those contributions that restrict DoD's
ability to release the software.  Thus, before the software can be released,
the following questions MUST be addressed:

* Has every part of the proposed release been generated by Government
  employees in the course of their duties?
* If not, is there permission from every other rights holder to release all of
  the other parts under the project's license?

The PD MUST consult with DoD Legal to perform an IP review (this review MAY be
done by email or any other convenient and legal means).  If there are external
contributions that were not contributed under the project's license, then the
PD MUST determine the license and copyright information for each contribution.
Provide these to DoD Legal for review and final determination if the licenses
are compatible with the license or contract under which the software is being
released.  If DoD Legal determines that there are impediments to releasing the
software, whatever permissions are necessary MUST be obtained before the
software is released.  If it is not possible to obtain the necessary
permissions, then the software MUST NOT be released.  Do not continue with the
rest of this process.  If DoD Legal agrees that there are no IP impediments to
releasing the software, then DoD Legal MUST send a digitally signed email to
the PD stating so.

Note that copyright protection attaches to all literary works, including
software, when they are created<sup>[8](#Footnote_8)</sup>.  This includes
software copied off of blogs, sites like http://stackoverflow.com/, and any
other sources.  If such code or documentation has been copied into a project
without permission and permission from the rights holder cannot be obtained,
it may not be possible to release the software.

### Distribution methods

There are many different ways of distributing software.  The agency that is
making the release make have a GitHub site or other centralized place which is
preferred for releases.  The PDs MAY choose to distribute by FTP, email,
another website, or other means, in addition to or in place of GitHub.  For
any and all distribution methods chosen, the PDs are responsible for creating
their own accounts.  If the distribution method uses email addresses as part
of the sign up process, then the PDs MUST use their Government email
addresses.  All login accounts MUST be reported to the PDs' supervisors.
Passwords MUST be kept secret.  If a site uses cryptographic authentication
such as public/private key pairs, PDs MAY choose to use this facility in
addition to, or instead of, passwords.  Private keys MUST be treated like
passwords and kept secret.

## Minor reviews

Minor releases include all releases that the PD, the PD's OPSEC officer, and
the PD's supervisor do not believe require a major review.  These include bug
fixes and minor updates.  A minor release only requires review by a level-1
OPSEC officer before being published.  These reviews are called "minor
reviews" and are subject to the following:

* The OPSEC officer MAY also be the technical reviewer for the release.
* Only if the project as a whole, including the minor changes being proposed
  for release, receives an "Approved for public release; distribution
  unlimited" statement can the changes be released.

The process for a minor release is as follows:

* The person who created the material sends it to the OPSEC reviewer.
* The OPSEC reviewer reviews the material and sends a digitally signed email
  back to the creator either stating that it may not be released or that it
  may be released.
* If the material may be released, then the creator pushes the material out to
  the public.

Note that there are numerous methods of sending the material.  If the material
is stored under git, and both the creator and the OPSEC officer have access to
the same private repository<sup>[9](#Footnote_9)</sup>, then the creator MAY
choose to push to the private repository and ask the OPSEC officer to pull it
and review the changes.  Alternatively, git bundles MAY be used, or one could
even email text files.  Regardless of the method chosen, there are two
requirements that MUST be met:

* The chosen method MUST uniquely identify the set of changes under
  discussion.  Examples include the complete git commit hash under discussion,
  emails with the complete change set, or any cryptographically signed
  method.  This ensures non-repudiation or confusion.
* The OPSEC reviewer MUST track what he or she has approved.  This MAY be done
  by saving the digitally signed emails that were sent.

These steps are REQUIRED for audit purposes.  Without them, DoD cannot prove
that it is properly reviewing material before it is released.

If a release appears to be a major release in the opinions of any of the PDs,
the OPSEC officer, or any of their superiors, then the full release process
described above re-executed.  A major release is any release that significantly
changes the scope of the project or may violate any of the checks described in
this document.

## Incorporating external contributions

Once the software has passed the process outlined above and has been publicly
distributed, any contributions to the project MUST be subject to its license.

External contributions do not need to undergo OPSEC review as they are assumed
to be public at the time of contribution.  They SHOULD be reviewed for quality
purposes before being accepted into a project to ensure that they are
professional in nature and perform as expected.  All external contributors
MUST have a CLA on file before their contributions are accepted into the
project.  A CLA only needs to be executed once by each legal entity.  Project
owners MUST explain in the README file that external contributors MUST execute
a CLA before their contributions will be accepted.

### Software maturity and software engineering

The DoD would like to be a world leader in computer science research.  To be a
world leader means that DoD must have an impact and to have an impact means
that DoD's software must be used.  Poorly written software that is
incomprehensible or difficult to compile or use will not be used, and will
have little, if any, impact.  Thus, if the primary improvement to a project
involves bringing it in line with generally accepted best practices in
software engineering to facilitate its transition to others, then this is also
of value and SHOULD be credited.  Examples of this include, but are not
limited to, the following:

* Providing a well-designed, thoroughly documented application programming
  interface (API) or other interface.
* Adding tests (unit tests, regression tests, integration tests, etc.) that
  increase confidence that your software is performing correctly.
* Increasing code coverage of tests.
* Adding examples and high-level documentation.  This includes ensuring that
  all examples and documentation are up to date with the current software.
* Simplifying building and installation of software.

These are just some examples of mature software.  If there is other evidence
of the maturity or quality of software, a PD should feel free to use it when
describing the impact of the software.  Supervisors MUST consider improvements
in software engineering when considering the impact of software.

# CC0 1.0 Universal (CC0 1.0) Public Domain Dedication

The text of the CC0 license can be found
[here](https://creativecommons.org/publicdomain/zero/1.0/legalcode.txt).
A local copy of the license is in the file [LICENSE.txt](LICENSE.txt).

# Contributor license agreement (CLA)

We recommend using the Developer’s Certificate of Origin 1.1 located at
https://developercertificate.org (“DCO”) for all external contributors to a
project.

Each external contributor MUST execute and return a copy for each project that
he or she intends to contribute to.  Once the publishing agency receives the
executed form, it will remain in force permanently.  Thus, external
contributors need only execute the form once for each project that they plan
on contributing to.

# Legal analysis - software protection & release mechanisms

The U.S. Army Research Laboratory has an excellent in-depth analysis of the
issues surrounding the release of software, please see this file at
[https://github.com/USArmyResearchLab/ARL-Open-Source-Guidance-and-Instructions/blob/develop/LEGAL_ANALYSIS.md].

# Glossary

A glossary of terms can be found [here](GLOSSARY.md).

# Footnotes

<sup><a name="Footnote_1">1</a></sup> As an example, U.S. law restricts the
strength of any encryption software that is being released to the world in
general by restricting the length of the keys being used. Since this could be
a hard-coded number in a piece of source code, a change in a single line may
convert it from legal to illegal.

<sup><a name="Footnote_2">2</a></sup> Software may be copyrighted but not
patented. "Software-related inventions" may be patented. At the time of this
writing, there was no clear definition of the difference between "software"
and "software-related invention". Consult ARL Legal for a more complete
explanation.

<sup><a name="Footnote_3">3</a></sup> Contracts usually protect the Federal
Government from the related patent issues. That said, if you have concerns,
consult ARL Legal and your contracting officer to determine what rights there
are.

<sup><a name="Footnote_4">4</a></sup> At the time of this writing, this has
not been litigated in Federal Court.  Consult the ARL Chief Counsel's Office
to determine what the current laws are.

<sup><a name="Footnote_5">5</a></sup> Except for works created by U.S. Federal
Government employees in the course of their duties.  These are automatically
in the public domain.

<sup><a name="Footnote_6">6</a></sup> Some licenses have guidelines that
differ from the ones described here.  For example, the GPL states that the
filename must be COPYING.  This is why your README MUST specify which file
contains the license.

<sup><a name="Footnote_7">7</a></sup> If you have questions about what are
"software-related inventions", consult with ARL Legal.

<sup><a name="Footnote_8">8</a></sup> Excluding works generated by Government
employees in the course of their duties.

<sup><a name="Footnote_9">9</a></sup> A private repository is only accessible
from within ARL; it MUST NOT be publically accessible!

<sup><a name="Footnote_10">10</a></sup> As an example, if a library is only
used within the Linux kernel, it will have been used by very few projects, but
will have an extraordinary impact.
