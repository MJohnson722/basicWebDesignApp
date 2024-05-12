import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./GitHubPage.css"


function GitHubPage() {
  return (
    <div>
        <div className="row">
            <div className="col-2">
                <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#intro">Intro</a>
                        <a className="nav-link" href="#toStart">To Start</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3 my-1" href="#installGit">Install git</a>
                            <a className="nav-link ms-3 my-1" href="#createAccount">Create GitHub account</a>
                        </nav>
                        <a className="nav-link" href="#linkingRepo">Linking your work to a GitHub repository</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3 my-1" href="#linkSSH">Link an SSH Key</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-5 my-1" href="#genSSH">Generate an SSH Key</a>
                                <a className="nav-link ms-5 my-1" href="#linkKey">Link the generated key</a>
                            </nav>
                            <a className="nav-link ms-3 my-1" href="#linkDirectory">Link a local directory with a GitHub repository</a>

                        </nav>
                        <a className="nav-link" href="#moreToDo">Once you have a repository linked</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ms-3 my-1" href="#status">Status</a>
                            <a className="nav-link ms-3 my-1" href="#pulling">Pulling</a>
                            <a className="nav-link ms-3 my-1" href="#pushing">Pushing</a>
                            <a className="nav-link ms-3 my-1" href="#adding">Adding</a>
                            <a className="nav-link ms-3 my-1" href="#committing">Committing</a>
                            <a className="nav-link ms-3 my-1" href="#branches">Branches</a>
                            <a className="nav-link ms-3 my-1" href="#merges">Merges</a>
                        </nav>
                        <a className='nav-link' href="#workOrder">Ideal Work Order</a>
                    </nav>
                </nav>
            </div>

            <div className="col-10">
                <div data-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                    <div id="intro">
                        <h4>Intro:</h4>
                        <p>Github is a cloud-based platform used for collaborative work on coding projects. It works by allowing different users to remotely access and change files through a series of what github calls 'pulls' and 'pushes,' where users can pull files to their own device, and push files from their device back to github on the cloud. Github is the web component of the software git, which is what actually moves the files. </p>
                    </div>
                    <div id="toStart">
                        <h4>To Start</h4>
                        <p>Before working with git and github you first need to do two things: have git installed, and have a github account. </p>
                        
                    </div>
                    <div id="installGit">
                        <h5>Install git</h5>
                        <p>Many computers now come with git automatically installed. To check, in your command prompt (terminal, ubuntu, etc.), run: git version. This will tell you the version of git running on your device if you have it. If you do not have it, install it from <a href='https://git-scm.com/downloads'>here</a>.</p>
                        
                    </div>
                    <div id="createAccount">
                        <h5>Create GitHub account</h5>
                        <p>On <a href='https://github.com/login' >GitHub</a> create an account.</p>
                        
                    </div>
                    <div id="linkingRepo">
                        <h4>Linking your work to a GitHub repository</h4>
                        
                    </div>
                    <div id="linkSSH">
                        <h5>Link an SSH Key</h5>
                        <p>In order to securely transfer files between github and your device, you need to give github your public SSH key, which is a way for github to unencrypt files which your computer sends to it as encrypted.</p>
                        
                    </div>
                    <div id="genSSH">
                        <h6>Generate an SSH Key</h6>
                        <p>To generate an SSH key if you do not already have one, follow these steps (command line prompts are indicated by a ‘%’, enter these into the terminal):</p>
                        <ul>
                            <li>% ssh-keygen</li>
                            <li>Type what you want the keys to be stored in (suggested: “.ssh”)</li>
                            <li>Type what you want your password to be (suggested: push enter to have no password)</li>
                            <li>% cd &#123;file name (.ssh if you used that)&#125;</li>
                            <li>% ls</li>
                            <li>% cat &#123;whatever file ends with .pub - this is your public encryption key&#125;</li>
                            <li>copy the printed result of the cat statement</li>
                        </ul>
                        
                    </div>
                    <div id="linkKey">
                        <h6>Link the generated key</h6>
                        <p>In your GitHub user settings go to the category ‘ssh and gpg keys’ and choose add key, and paste the public key.</p>
                        
                    </div>
                    <div id="linkDirectory">
                        <h5>Link a local directory with a GitHub repository</h5>
                        <p>Before anything else, on github create a repository, then create a folder which you want to hold the local version of your linked github repository. In your terminal navigate with % cd until you are in the folder which you want to have your repository in. Then, in the github website, open your repository, click the green button that says “&#60;&#62; code”. Under the local tab, click the button that says ssh, and copy the link it produces. Finally, in your terminal, type  % git clone &#123;the link you just copied&#125;. This should clone your repository into the folder on your computer, making a copy of it. </p>
                        
                    </div>
                    <div id="moreToDo">
                        <h4>Once you have a repository linked</h4>
                        <p>There are a number of things you can do once you have linked your repository with your local device. A list of many git commands can be found <a href='https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html' >here</a>. Below are the main functionalities for moving and manipulating files with the github system. </p>
                        
                    </div>
                    <div id="status">
                        <h5>Status</h5>
                        <p>A very helpful command in git is % git status, which will usually explain what you need to do if you need to do anything, whether it be that everything is up to date, or that you need to add files, or that you need to make a commit, or that you need to push to the cloud. </p>
                        
                    </div>
                    <div id="pulling">
                        <h5>Pulling</h5>
                        <p>Pulling is what one does to grab the data on github in the cloud and add it to the local device. The command to copy the main branch in the cloud to the main branch on the local device would be % git pull origin main</p>
                        
                    </div>
                    <div id="pushing">
                        <h5>Pushing</h5>
                        <p>Pushing is what one does to add data on the local device to the cloud-based repository. The command to copy the main branch on the local device to the main branch in the cloud repository would be % git push origin main. </p>
                        <p>Branches are explained further down, but say you have a branch titled workBranch. This can also be pushed to github with, % git push origin workBranch. </p>

                    </div>
                    <div id="adding">
                        <h5>Adding</h5>
                        <p>When files are created locally that are not in the github repository, these must all be added before they can be moved elsewhere so that github knows to keep track of them. This can be done with the command % git add &#123;file name&#125;. To add all new files, you can use the command % git add -A.</p>

                    </div>
                    <div id="committing">
                        <h5>Committing</h5>
                        <p>Committing is what one does to tell github that the files are ready to be moved on to the next steps, merging and pushing, essentially telling github that the changes made so far are committed, meaning they will not be changed further. This is also a space to add a message explaining the changes made. To do this, the command is % git commit -a -m “&#123;insert explanation of changes here&#125;. To make a commit, first all new files must be added. </p>

                    </div>
                    <div id="branches">
                        <h5>Branches</h5>
                        <p>Branches are a way for changes to be made to a code without risking ruining the main code. Any person updating a repository can make branches on their local device, and even push them to the cloud so that these branches can be viewed by others. You can view all branches with the one you are on highlighted by typing the command % git branch. Branches can be created with the code % git branch &#123;branchName&#125;. You can then switch to this new branch with the command % git checkout &#123;branchName&#125;. To create and move to a new branch in one move, you can use the command % git checkout -b &#123;branchName&#125;. Changes made to a code should be done on a branch other than the main in order to avoid huge errors or bugs. </p>

                    </div>
                    <div id="merges">
                        <h5>Merges</h5>
                        <p>Merges are how code is moved (or merged) from one branch to another. Say you have made changes to code on workingBranch, and committed the changes. These are now ready to merged with the local main branch. The setup for this is that you should be on the branch you want to merge the changes to, say the main branch, and you will run the command % git merge workingBranch. </p>

                    </div>
                    <div id="workOrder">
                        <h4>Ideal Work Order</h4>
                        <p>Using the following steps, the user can avoid common errors that occurr when multiple people are working on one repository</p>
                        <ul>
                            <li>Pull current main from GitHub</li>
                            <li>Make / move to a workingBranch (merge main to workingBranch if needed)</li>
                            <li>Make changes on working branch</li>
                            <li>Do any adds or commits necessary</li>
                            <li>Move to local main</li>
                            <li>Pull global main again incase changes have been made</li>
                            <li>Merge working branch with local main</li>
                            <li>Push local main to global main</li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default GitHubPage