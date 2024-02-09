---
title: 'GitHub unfollowers tracker'
image: '/images/work/github-unfollowers/github-followers-tracker-index.png'
date: '2022-08-15'
excerpt: 'A simple project that allows you check who is unfollowed you and who you do not follow back'
stack: ['React', 'Styled Components', 'Vercel']
---

GitHub unfollowers tracker is a simple project in react that allows you to check who is unfollowed you and who you do not follow back.

> website: [GitHub unfollowers tracker](https://git-hub-unfollower-tracker.vercel.app)  
> stack: React, Tailwind, Vercel

This project help me to practice how to work with pagination, the GitHub endpoint returns the data with pagination which challenge me to create a recursive function that allows me to check all the pages and get all the data.

```js
function fetchPagination(url, page = 1, previousResponse = []) {
  return fetch(`${url}&page=${page}`, {
    headers: {
      Authorization: `token${import.meta.env.VITE_GITHUB_TOKEN}`,
      'User-Agent': 'request',
      Accept: 'application/vnd.github.v3+json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((newResponse) => {
      const response = [...previousResponse, ...newResponse];
      if (newResponse.length !== 0) {
        page++;
        return fetchPagination(url, page, response);
      } else {
        return response;
      }
    })
    .catch((error) => console.log(error));
}

export { fetchPagination };
```

also i have to think how to compare the users that a person follows between the ones that are following him, in that way i can retrieve the users that are not following back and the ones that are not following him.

here's how i resolve it:

```js
function getUnfollowers(firstArray = [], secondArray = [], arrayCopy = []) {
  arrayCopy = [...secondArray];

  for (let index = 0; index < firstArray.length; index++) {
    for (let index1 = 0; index1 < arrayCopy.length; index1++) {
      if (firstArray[index].login === arrayCopy[index1].login) {
        arrayCopy.splice(index1, 1);
      }
    }
  }

  return arrayCopy;
}

export { getUnfollowers };
```

![unfollowers image](/images/work/github-unfollowers/github-followers-tracker-search.png)
