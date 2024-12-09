export default async function useHttp(method, url, params) {
  try {
    let response;
    const reqMethod = method.toUpperCase();

    if (reqMethod === 'POST') {
      response = await fetch(url, { method: reqMethod, body: params });
    } else if (reqMethod === 'GET') {
      const urlParams = new URLSearchParams(params);
      const fullUrl = `${url}?${urlParams.toString()}`;
      response = await fetch(fullUrl, { method: reqMethod });
    }

    if (!response) {
      throw new Error('不支持的方法');
    }

    if (!response.ok) {
      throw new Error(response);
    }

    // 获取 Set-Cookie 头部
    const setCookieHeader = response.headers.get('Set-Cookie');
    if (setCookieHeader) {
      // 将 Cookie 存入浏览器
      document.cookie = setCookieHeader.split(';')[0]; // 只取第一个 Cookie
      console.log('Cookie 已存入浏览器:', document.cookie);
    }

    return await response.json();
  } catch (error) {
    console.error('发生错误:', error);
  }
}
