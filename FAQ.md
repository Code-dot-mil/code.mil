#Frequently Asked Questions (FAQs)

##What is Code.mil?

Code.mil is an experiment in open source at the U.S. Department of Defense (DoD). The goal is to foster open collaboration with the developer community across the world on DoD open source projects.  

The Code.mil initiative will iterate in phases. The initiative launched on February 22, 2017. You can read the official [press release here](https://www.defense.gov/News/News-Releases/News-Release-View/Article/1092364/dod-announces-the-launch-of-codemil-an-experiment-in-open-source). During this first phase, we called upon the developer community to help finalize our open source strategy for code written by DoD employees. In the second phase, projects will be hosted on Code.mil upon finalization of the strategy in March 2017. Also, the Code.mil URL, which currently redirects to the DoD GitHub repository, will become a full fledged website. 

Future phases include expanding the repository to include projects from other DoD offices, tackling procured source code, and addressing how this strategy might facilitate technology transfer. The hope is that Code.mil will encourage conversation around these topics and allow anyone around the world to contribute knowledge and code for DoD projects.

This initiative is not intended to set DoD policy, but rather is exploring alternate ways to join the open source and free software communities.

##Who is behind Code.mil?

The [Defense Digital Service](https://dds.mil) (DDS) launched Code.mil on February 22, 2017. Established on November 18, 2015 by the Secretary of Defense, DDS brings in the best private sector talent, technology, and processes to DoD. DDS functions like a SWAT team of nerds working on high impact challenges during one to two year tours of duty as federal employees. DDS is an agency team of the [United States Digital Service](https://usds.gov).

##Who has been involved with Code.mil?

DDS has collaborated extensively with organizations in the open source and free software communities, such as the Free Software Foundation (FSF), the Open Source Initiative (OSI), and GitHub. DDS also reached out to open source experts and attorneys across the U.S. Federal government and in the private sector. 

##How does Code.mil relate to Code.gov?

Code.mil supports the goals of and has collaborated with Code.gov. Code.mil applauds the [Federal Source Code Policy](https://sourcecode.cio.gov), which is designed to support reuse and public access to custom-developed Federal source code.

##Why is DoD doing this?

U.S. military members and their families make significant sacrifices to protect our country. Their lives should not be negatively impacted by outdated tools and software development practices that lag far behind private sector standards.

Modern software is open sourced software. The creative contribution of individual developers to help solve complex problems of impact is largely untapped by DoD. Through this experiment, we are trying to more actively participate in the open source and free software communities. We need your help to build better software products and services for our military members and citizens across the country.

##What happened as a result of community feedback during phase one? What happened to the draft Defense Open Source Agreement?

The original open source strategy explored an innovative legal pathway of using contract law to attach widely adopted licenses to our projects. This strategy was encapsulated in the draft Defense Open Source Agreement. The developer community energetically responded to our call for comment, and we received a lot of great feedback. Thank you! 

Based on the feedback, we updated our strategy to move away from contract law and instead focus on the contribution process. We deleted the draft Defense Open Source Agreement in the LICENSE-agreement.md file. Our updated strategy is now captured in [`CONTRIBUTING.md`](/Proposal/CONTRIBUTING.md). 

We think the updated strategy avoids the complications of using contract law and also the perception that we're creating a new license. We hope this will keep our practices more consistent with the open source and free software communities. We intend to use widely adopted licenses for our projects when copyright is applicable.

##How are you attaching licenses to your projects since software created by U.S. Federal government employees does not have copyright protections in the U.S.?

Works created by U.S. Federal government employees within the scope of their employment is ineligible for copyright protections in the U.S. and certain foreign jurisidictions. People sometimes say that U.S. law requires Federal government employees to put creative works in the public domain, but that's not quite right. The U.S. Copyright Act does not explicitly define public domain. What the Act actually does is make works created by U.S. Federal government employees ineligible for copyright protections (17 U.S.C. 105). Public domain is generally understood to refer to creative materials that are not protected by intellectual property laws such as copyright, trademark, or patent laws. Under U.S. laws, Government-created works may be eligible for patent or trademark protections. Not all countries acknowledge the concept of public domain.

The updated strategy in [`CONTRIBUTING.md`](/Proposal/CONTRIBUTING.md) does not attempt to attach licenses to Government-written code. Rather, the strategy attaches the license to copyrighted contributions by using the Developer Certificate of Origin (DCO) process and to Government-written code in countries where that code is eligible for copyright protections.

##Why not just put Government-written code in the public domain and use CC0 1.0 Universal for copyrighted contributions and jurisdictions where you have copyright?

Good point! We definitely considered this. CC0 1.0 Universal seeks to dedicate copyrighted work to the public domain by waiving the author's rights to the work worldwide under copyright law. Using CC0 1.0 Universal is one possiblity, but not the only one. There are many high quality and widely adopted open source and free software licenses, each with their own advantages and disadvantages. We are not intending to judge the merit of using CC0 1.0 Universal. Rather, we are positing that the project maintainer should have the freedom of choice when it comes to selecting the "best" license for that particular project. 

Intelligent minds will differ on the "best" avenue for a U.S. Federal government agency to participate in open source. The reality is that every organization, and every project, has unique circumstances that affect which option might make the most sense. This initiative is not intended to set DoD policy, but rather is exploring alternate ways for joining the open source community.

##How are you handling code contributions?

We are using the [Developer Certificate of Origin](https://developercertificate.org) process. The DCO is a legally binding statement asserting that you are the creator of your contribution, or that you otherwise have the authority to distribute the contribution, and that you are intentionally making the contribution available under the license associated with the project. The intent is to use widely adopted open source and free software licenses.

We considered other mechanisms, such as a Contributor Licensing Agreement or copyright assignment, but chose DCO because it reuses the license associated with the project rather than crafting new licensing language, is not administratively burdensome to implement, and is commonly used in the developer community.

##What is the liability of a contributor?

Under the DCO, a contribution is submitted under the open source license associated with the project, which will have warranty and liability disclaimers. The licenses we are considering disclaim warranties and provide the code AS IS.

##What do I need to know if I fork the project?

What you need to do if you fork the project depends on the status of the project at the time you fork it. The CONTRIBUTING.md file never has to be included in a fork. Whether LICENSE.md has to be included in a fork depends on the status of the project at the time.

* If the project includes no copyrighted code (so there have been no merged copyrighted contributions and your jurisdiction does not recognize copyright for Government-written work), then you do not need to include LICENSE.md in the fork. It might be helpful to have some explanation similar to section 1 in [`CONTRIBUTING.md`](/Proposal/CONTRIBUTING.md) to explain the copyright status, but it is not strictly necessary.
* If the project includes copyrighted code (so there are merged copyrighted contributions or your jurisdiction recognizes copyright for Government-written work), then you would need to include LICENSE.md in the fork (assuming you have forked the entire project inclusive of the copyrighted code) and abide by the terms of the license.

##Is DoD trying to do something funny here?

No!

We mean to be totally transparent in our intent and purpose with Code.mil. Since we’re trying a slightly different approach to open source our work, we want to be really clear about what we’re doing and why we’re doing it so that you feel comfortable contributing to our projects.


**For more information or questions, please contact our team at code@dds.mil. Happy coding!**
