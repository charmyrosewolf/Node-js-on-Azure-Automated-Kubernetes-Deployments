import fetch from 'node-fetch';
import * as Web from 'webwebweb';

Web.APIs['/jobs'] = async (qs, body, opts) => {
    let jobs = await fetch(`http://localhost:8081/search?text=${qs.text}`)
        .then(res => res.json());
    return jobs;
};

Web.Run(8080);