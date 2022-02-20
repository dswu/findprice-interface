// @ts-ignore
/* eslint-disable */
import request from 'umi-request';

/** 此处后端没有提供注释 POST /v1/discord/interactions */
export async function UserDiscordInteractions(
  body: API.v1InteractionsPayLoad,
  options?: { [key: string]: any },
) {
  return request<API.v1InteractionsResponse>(
    `${process.env.REACT_APP_BACKEND_URL + '/.netlify/functions'}/v1/discord/interactions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

/** 此处后端没有提供注释 POST /v1/user/connection/github */
export async function UserConnectionGithub(
  body: API.v1ConnectionGithubPayLoad,
  options?: { [key: string]: any },
) {
  return request<API.v1ConnectionGithubResponse>(
    `${process.env.REACT_APP_BACKEND_URL + '/.netlify/functions'}/v1/user/connection/github`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
