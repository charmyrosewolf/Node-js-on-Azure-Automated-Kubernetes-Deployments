import fetch from 'node-fetch';
import * as Web from 'webwebweb';

/* Fetches and filters jobs from github api every 15 minutes */

let jobs = [];
async function getLatestJobs() {
    jobs = await fetch("https://jobs.github.com/positions.json")
        .then(res => res.json());
}
getLatestJobs();

setInterval(() => {
    getLatestJobs();
}, 60000 * 15);

Web.APIs["/search"] = (qs, body, opts) => {
    if (qs.text) {
        let terms = qs.text.split(',');
        return jobs.filter(x => terms.every(term => x.description.match(new RegExp(term, "i"))))
    } else {
        return jobs;
    }
}

Web.Run(8081);