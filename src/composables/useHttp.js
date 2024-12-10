async function useHttp(method, url, params) {
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

async function useKeepHttp(method, url, params = {}) {
  try {
    const baseUrl = import.meta.env.VITE_KEEP_API;
    const reqUrl = url.replace(/^\/|\/$/g, ''); // 去掉开头和结尾的'/'
    return await useHttp(method, `${baseUrl}/${reqUrl}`, params);
  } catch(e) {
    throw new Error(e);
  }
}

export { useKeepHttp }
