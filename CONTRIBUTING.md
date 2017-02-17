**CONTRIBUTING.md is for software projects. You do not need to follow the DCO process for commenting on the Code.mil repository documentation, like CONTRIBUTING.md or AGREEMENT.md.**

Department of Defense (DoD) software projects released under the Defense Open Source Agreement (DOSA) use the Developer’s Certificate of Origin (DCO) to manage the contribution process. The DCO is a legally binding statement that asserts that you are the creator of your contribution and that you are intentionally making your contribution available under the license associated with the project.

Signing the DCO is done using a Signed-off-by process in Git. The Signed-off-by is a simple line at the end of the commit message.

You should only submit a contribution if you are willing to agree to the DCO terms. If you are willing, just add a line to every git commit message:

```Signed-off-by: Jane Smith <jane.smith@email.com>```

You may type this line on your own when writing your commit messages. However, Git makes it easy to add this line to your commit messages. Make sure the user.name and user.email are set in your git configs. Use -s or – – signoff to add the Signed-off-by line to the end of the commit message. If you set your user.name and user.email as part of your git configuration, you can sign your commit automatically with git commit -s.

You have to use your real name--pseudonyms or anonymous contributions will not be accepted.

The text of the DCO is (from https://developercertificate.org):
```
Developer Certificate of Origin
Version 1.1

Copyright (C) 2004, 2006 The Linux Foundation and its contributors.
1 Letterman Drive
Suite D4700
San Francisco, CA, 94129

Everyone is permitted to copy and distribute verbatim copies of this
license document, but changing it is not allowed.

Developer's Certificate of Origin 1.1

By making a contribution to this project, I certify that:

(a) The contribution was created in whole or in part by me and I
    have the right to submit it under the open source license
    indicated in the file; or

(b) The contribution is based upon previous work that, to the best
    of my knowledge, is covered under an appropriate open source
    license and I have the right under that license to submit that
    work with modifications, whether created in whole or in part
    by me, under the same open source license (unless I am
    permitted to submit under a different license), as indicated
    in the file; or

(c) The contribution was provided directly to me by some other
    person who certified (a), (b) or (c) and I have not modified
    it.

(d) I understand and agree that this project and the contribution
    are public and that a record of the contribution (including all
    personal information I submit with it, including my sign-off) is
    maintained indefinitely and may be redistributed consistent with
    this project or the open source license(s) involved.
```
