const { describe, it, expect } = require('@jest/globals');
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testa a função getRepos', () => {
  it('Testa que a requisição a API possue "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" na lista', () => {
    expect.assertions(2)
    return getRepos('https://api.github.com/orgs/tryber/repos').then((resp) => {
      const firstTest = resp.some(el => el === 'sd-01-week4-5-project-todo-list');
      expect(firstTest).toBe(true);
      const secondTest = resp.some(el => el === 'sd-01-week4-5-project-meme-generator');
      expect(secondTest).toBe(true);
    });
  })
});