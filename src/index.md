---
title: Introduction to GitHub
layout: "base.njk"
---
## Introduction:

You must have heard about GitHub and git and how it is an important tool in programming. in this article, you will be learning about GitHub and what it does, How to use some of its commands when building an application.

## Prerequisites: 
- You must have a GitHub account. You can create one by following this link [GitHub](https://github.com/). 
- You must install Git on your local machine.
- To access GitHub repositories from the command line, you must first generate a personal access token or enter your ssh public key information.





<!-- ![Maldives Beach](https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80)



[A link example](https://www.markdowntutorial.com/) -->

## What is GitHub:

GitHub is a cloud-based platform for hosting, storing, and managing programmers' code. It is used for collaboration and version control. When you say a version control platform, it means that it tracks and records changes made to a file so that the programmer can easily access it.

## Why GitHub:

Here are some of the benefits of using GitHub:

GitHub allows you to keep track of changes, issues, and milestones so you can see what your team members are up to.
GitHub allows you to share a link so that anyone can quickly review and test your application, whether you want customer feedback or professional analysis of your code.

## What is Git:

Linus Torvalds created Git, an open-source version control platform, in 2005.

Git is a version control system for keeping track of changes to computer files, which means that every developer's computer has access to the whole codebase and history, enabling easy branching and merging. Let's compare Git vs GitHub now that you know what GitHub and Git are.

## Git vs. GitHub:

Git is a version control system for managing and tracking the history of source code. GitHub is a cloud-based service for managing Git repositories.

## What is Git Clone:

The Git clone command can be used to create a copy of a particular repository at that point in time including all versions of every file, folder, all branch, and all commits of that repository. You can also clone a branch within a repository. There are other ways you can clone in git. A few are listed below.

1. Git clone --mirror: In this method of cloning, you clone without being able to edit any of the files. This includes the refs or branches. This is mostly used when you want to create a secondary copy of a repository on a separate remote and match it to all of the branches.

2. Git clone --sparse: This is used to populate only the files in the root directory and helps with performance when cloning large repositories with many directories and sub-directories. 

3. Git clone --single-branch: This is used to clone a single branch.
  
  ### How to make a clone:
  - Open your terminal
  - Change the current working directory to the location where you want the cloned directory.
  - Type in the git clone and paste the url you copied from github as seen below.
  - Click on your enter key to create your clone.

## Git Pull Request:
A pull request is the process of merging new changes with the main repository.
You now have the knowledge of Git being used for collaboration. You may be wondering how this is done. One of the ways this is done is by forking the repository. When you are done with making your changes, you create a pull request to ask the maintainer or owner of the repository to merge your changes into the project. Before merging, the maintainer will perform a code review on the changes you made.

### How to create a pull request
- Go to your forked repository and click the New pull request button on the left side of the page. 
- You can change the branch. On either side, you can choose the appropriate repository and branch from the drop-down menu.
- After selecting the main branch of the original repository on the left and the new-branch of your forked repository on the right, you should see a screen stating that your branches can be merged if no competing code exists. 
- Add a title and a comment to the appropriate fields before clicking the Create pull request button.
-  The maintainers of the repository will determine if they will accept your pull request. By submitting a code review, they may request that you edit or revise your code before accepting the pull request.
  
  ## Git Commit
  Git commit generates a commit, which is similar to taking a snapshot of your repository. These commits are time-stamped snapshots of your entire repository. When you commit, you save your project, and Git saves the work in the local repository.

  ### How to commit
  Open  your terminal and enter the following command to commit.
  - $ git init
  - $ git add . (This adds the files to a local repository and stages them for commit.)
  - $ git commit -m "My first commit"  (This commits the tracked changes and prepares them for a remote repository push.)

## GitHub Desktop vs. Github CLI
When comparing The Command Line vs GitHub Desktop, the most important reason people chose The Command Line is that it provides access to every git function available.It integrates with all of GitHub's features seamlessly and easily, and it also supports forking and submitting pull requests on any open source project hosted on GitHub. while GitHub Desktop has a very simple two-panel layout. It cannot perform complex historical visualizations like other GUIs, but it is extremely simple to use (especially for git novices).

## Conclusion:
You now understand the fundamentals of a version control system and how Git works. We looked at some of GitHub's features before comparing GitHub Desktop and GitHub CLI.
The beauty of GitHub is that it lowers the barrier to entry for collaboration, allowing anyone to contribute ideas to projects of their choice or start their own. It's difficult to imagine the world of open-source software prior to GitHub.