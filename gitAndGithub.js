//? Git -> Version Control System is a tool that helps to track changes in code 
//* Git is a Version Control System. It is :
//* popular 
//* free and Open Source
//* fast and scalable 

//* So basically VCS always keep track the history of our project just like a bank passbook does.
//* So GIT is a VCS which basically does this thing


//? GIT is mostly used for 2 main purpose 
//* 1. To track the history of our code 
//* 2. Collaborate 



//? GITHUB -> Website that allow developers to store and manage their code using Git.

//* Whenever we are talking about LOCAL it means we are talking about our own computer and whenever we are talking about REMOTE it means those files and folders which are on GITHUB 


//? Basic Git Commands 
//? 1. Clone and Status => 
//* Clone -> Cloning a repository on our local machine
//* Clone means duplicate banaana  
//! Syntax -> git clone <-some link-> 

//* Status -> displays the state of the code 
//! Syntax -> git status 


//* Remember whenever we changing something then we need to do 2 step process 
//* First Step is ADD 
//* Second Step is COMMTI
//* Untill we don't follow these steps then we are not able to clean git status 


//* So whenever we are using GIT STATUS, generally we have 4 kinds of STATUS 
//? untracked -> new files that git doesn't yet track (Aisi files jinke baare mein git ko nahi pata), In case of NEW FILES we get untracked msg 
//? modified -> changed, And in case of UPDATED FILES we get modified as STATUS 
//? staged -> file is ready to be committed, But whenever we add these files then the STATUS we get is (staged)
//? unmodified -> unchanged, And when we commit those files then there STATUS will change to (unchanged)



//? 2. Add and Commit => 
//* Now we have done so many changes, now how GIT will track these changes.....???
//* So to keep track we first need to do GIT ADD <FILENAME> which file we need to add 
//* Add basically Engagement ki State hai 
//* Commit basically Wedding ki State hai 
//? Add -> adds new or changed files in your working directory to the Git staging area.
//! Syntax -> git add <filename>


//? Commit -> it is the record of change
//* It means ki ab pura record ban chuka hai
//! Syntax -> git commit -m "some message"


//* Now whatever changes we have committed we need to show them in our GITHUB account so for that we have PUSH command 
//? 3. Push =>
//* Push -> upload local repo context to remote repo
//! Syntax -> git push origin master 
//* By-Default all our GITHUB REPOS are REMOTE REPOS
//* So jitni bhi repos hai unme se ORIGIN waali jo repo hai uske upar hum directly apna code push krrna chahaate hai



//? 4. Init Command => 
//* Init -> this command is used to create a new git repo 



//? 5.git remote add origin <link>  => Basically we are saying to git remote(remote repos) that from now onward my name is origin + <link>
//* Basically isse origin change ho gaya hai 
//* Now origin kya set hua hai uske liye hum krr skte hai (git remote -v) 
//? git remote -v   =>  to verify remote 





//? git branch (to check branch) but before deep dive into this command let's understand about the BRANCH 
//* Let's suppose there is a project in which many teams are working like FrontEnd Team, BackEnd Team and BugFixing Team so as we can see that 3 teams are working together on a single project, so these individual teams will make a copy and then work on that copy and these copies are called as a branch(just like a tree branch)
//? So jab bhi check krrna ho ki hum kiis branch pe hai then we use (git branch) command




//? git branch -M main (to rename branch)


//* Now we can do (git push origin main) or (git push -u origin main)
//* -u means to set upstream
//* upStream set krrne kaa matlab hai ki agar hum bohot lambe time tak same project pe kaam krrne waale hai toh baar baar hum (origin main) nahi likhna chahaate toh uske liye hum ek hi baar mein bata dete hai ki hum saare operation (origin main) ke upar hi perform krrne waale hai 
//* So next time whenever we want to push our code to same repo then we can just write (git push)
//? So we can say that we are using -u so that we can set upstraem for FUTURE 



//? Workflow -> 
//* 1. Github repo 
//* 2. Clone 
//* 3. Changes 
//* 4. Add 
//* 5. Commit 
//* 6. Push 



//? Git Branches -> 

//? git checkout <-branchName->  => This command is used to navigate through different branch 
//? git checkout -b <-newBranchName->   =>  This command is used to create new branches 
//? git branch -d <-branchName->  => This command is used to delete branches 



//todo    Merging Code 
//? Way-1   
//*  git diff <-branch name->   (to compare commits, branches, files and more)
//* git merge <-branch name->   (to merge 2 branches)


//? Way-2  
//* Create a PR 
//* Pull Request -> It lets you tell others about changes you've pushed to a branch in a repository on GitHub.





//? Whatever change we have created in out master branch those changes were not seen in your local system 
//* And if you want that changes in your local system also then you need to use a command called PULL COMMAND 
//todo   Basically Remote ke changes Local mein laane ke liye we use PULL COMMAND 
//! Syntax -> git pull origin master
//* used to fetch and download content from a remote repo and immediately update the local repo to match that content.






//? Resolving Merge Conflicts -> 
//* An event that takes place when Git is unable to automatically resolve differences in code between two commits.






//? Undoing Changes -> Sometimes we do changes which we don't want to do but we have done that by mistake, so for that we need to undo that change
//todo  Case 1 : statged changes(means add ho chuke hai but commit nahi hue hai)
//*              git reset <-file name-> 
//*              git reset 

//todo  Case 2 : commited changes(for one commit)
//*              git reset HEAD~1

//todo  Case 3 : commited changes(for many commits)
//*              git reset <-commit hash-> 
//*              git reset --hard <-commit hash-> 






//? Fork -> A fork is a new repository that shares code and visibility settings with the original "upstream" repository.
//* Fork is a rough copy 



//? Git Stash -> When you're working on a project with Git and you have changes that you're not ready to commit, you can "stash" those changes temporarily. This lets you switch to another task without losing your current work. You do this by running:
//! Syntax -> git stash

//* If you want to stash only single file then use this command
//! Syntax -> git stash -- <-fileName-> 







//*************All About Git******************** */
//? Git is a distributed version control system (DVCS) that helps developers track changes in their source code during software development.

//? A repository simply refers to a location where data is stored or managed.
//? Git repository is repository managed by the Git.



//? Configure Git
//* git config --global user.name "Your Name"
//* git config --global user.email "Your Email"


//? git init -> Change any normal folder to git repository 



//? git restore -> 
//! Syntax to unstage from stage -> git restore --staged <-filename-> 
//! Syntax to discard from unstaged -> git restore <-fileName-> 
//! Syntax to remove everything -> git restore --staged --worktree .  (where . means all files)
//* git restore --source (iski default value HEAD hoti hai)
//! git restore --source=<-HashValue-> .




//? git reset -> Basically this command is used to change the state of our HEAD
//* As it is clear from it name that it is used to reset the commit history
//* The git reset command is used to undo changes in Git by moving your current branch’s HEAD (the reference to the latest commit) to a different commit. It's a way of "resetting" your branch's history to a previous state. This can affect both your working directory (the files you're working on) and your staging area (where you prepare files for commit).


//todo ->  You committed something, but there's a mistake and you want to make changes before committing again. 
//? git reset --soft HEAD~1 (basically ye aapko HEAD ke pehele waale commit pe le jaayega, but this command will not unstage the changes)
// Soft Reset (--soft)
// What it does: Moves the branch pointer (HEAD) to a previous commit, but keeps your changes in the staging area (ready to commit).
// Use case: If you want to "uncommit" your changes, but keep them staged for further editing or committing.


//? git reset --mixed HEAD~1    #Undo the last commit and unstage changes
// Mixed Reset (default)
// What it does: Moves the branch pointer (HEAD) to a previous commit, removes changes from the staging area, but keeps the changes in your working directory (files are not deleted).
// Use case: If you want to "unstage" changes and go back to a previous commit, but you don’t want to lose your work in the files
//* So the difference is that git reset soft will not unstage changes but git reset will also unstage changes


//? For completely discard 
//* git reset --hard HEAD~1
// Hard Reset (--hard)
// What it does: Moves the branch pointer to a previous commit and discards all changes in both the staging area and your working directory. This is like a complete "rollback" to the previous commit.
// Use case: If you want to completely discard your changes and get your repository back to a clean state as it was at a specific commit.


//? Soft reset to a specific commit 
//* You want to reset your code to a specific commit, keeping the changes in your working directory.
//! Syntax -> git reset --soft <commit hash>


//? Mixed reset to a specific commit 
//* You want to reset your code to a specific commit, unstage changes, and keep them in your working directory
//! git reset --mixed <commit-hash> 
//* reset to a specific commit, unstage changes, keep them in the working directory


//? Hard reset to a specific commit 
//* you want to completely discard changes and reset your code to a specific commit
//! Syntax -> git reset --hard <commit-hash> 
//* Reset to a specific commit, discarding all changes




//? Git Revert -> Basically it work in similar fashion as git reset do,but it does not remove git commit history
//todo  The git revert command is used to undo a commit by creating a new commit that reverses the changes introduced by a previous commit. It’s different from git reset because it doesn’t remove any commits from the history; instead, it adds a new commit that "cancels out" the changes of a specific commit. 
//* Reverting a commit means creating a new commit that undoes the changes made in a previous commit. This preserves the history and makes it safer, especially for shared repositories, because it doesn't rewrite history like git reset can.
//! How It Works:
//todo ->  If you made a mistake in a commit (e.g., added a bug, or committed something you didn't mean to), you can use git revert to undo that commit.
//? Unlike git reset, which changes the commit history, git revert adds a new commit that effectively cancels out the changes from the specified commit, leaving the project history intact.
//* REVERT don't rewrite history 



//? Git Rebase -> The git rebase command is used to move or combine a sequence of commits to a new base commit. It helps you rewrite history in a way that makes your commit history look cleaner or linear.


//? origin -> Basically it is a default name for remote repositories