# Internship Day 03 Documentation  
## Topic: Git Branching Commands  

**Name:** Soumya Ranjan Das  
**Internship Mode:** Online  
**Day:** 2  
**Topic:** Branching & Merging  
**Tool Used:** Git, GitHub, VS Code  



## 1. Objective of Day 2
The objective of Day 2 was to understand Git branching, why branches are used in real-world development, and how to create, switch, merge, and delete branches using Git commands.



## 2. What is a Branch?
A branch in Git is a separate line of development that allows developers to work on new features or bug fixes without affecting the main (stable) codebase.



## 3. Why Branches are Used?
- To work on features independently  
- To keep the main branch stable  
- To support parallel development  
- To safely test changes before merging  




## 4. Git Branching Commands

### View All Local Branches
git branch

### Create a New Branch
git branch branch-name


### Creates a new branch without switching to it.
Example: git branch feature-login

### Switch to an Existing Branch
git checkout branch-name


Example: git checkout feature-login

### Create and Switch to a New Branch
git checkout -b branch-name


Example: git checkout -b feature

### Rename a Branch
git branch -m old-name new-name


Example: git branch -m feature feature-ui

### Delete a Branch (After Merge)
git branch -d branch-name


Example: git branch -d feature

### Force Delete a Branch
git branch -D branch-name


Used when a branch is not merged.

### List Remote Branches
git branch -r

### List All Branches (Local + Remote)
git branch -a

### Push a Branch to GitHub
git push origin branch-name

Example: git push origin feature

### Set Upstream Branch
git push -u origin branch-name


Links local branch with remote branch.

### Merge a Branch into Current Branch
git merge branch-name
Example: git merge feature

### Check Current Branch Status
git status

## 5. Modern Git Commands (Recommended)
git switch branch-name
git switch -c new-branch


Example: git switch -c feature-auth
