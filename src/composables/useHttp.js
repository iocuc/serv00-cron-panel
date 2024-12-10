export default async function useHttp(method, url, params) {
  try {
    let response;
    const reqMethod = method.toUpperCase();

    if (reqMethod === 'POST') {
      const reqParams = JSON.stringify(params);
      response = await fetch(url, { method: reqMethod, body: reqParams, credentials: 'include' });
    } else if (reqMethod === 'GET') {
      const urlParams = new URLSearchParams(params);
      const fullUrl = `${url}?${urlParams.toString()}`;
      response = await fetch(fullUrl, { method: reqMethod, credentials: 'include' });
    } else {
      throw new Error('不支持的方法');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
