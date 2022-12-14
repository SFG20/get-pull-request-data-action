const core = require('@actions/core');
const github = require('@actions/github');



async function run(){
    const myToken = core.getInput('myToken');
    const octokit = github.getOctokit(myToken)

    try {
        // `who-to-greet` input defined in action metadata file
        const issue_number = core.getInput('issue_number');
        console.log(`issue_number ${issue_number}!`);
        core.setOutput("data", {data: 12, issue_number});
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);

        const {data: pullRequest} = await octokit.rest.pulls.get({
            pull_number: issue_number
        });

        console.log({pullRequest});

        console.log('huzzah!')
    } catch (error) {
        core.setFailed(error.message);
    }


}








run();
