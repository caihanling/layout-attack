package zx.soft.data.source;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class GetInterface {
	
	public String getData(String url) throws ClientProtocolException, IOException{
		CloseableHttpClient httpClient =HttpClients.createDefault();
		String result = null;
		HttpGet httpGet = new HttpGet(url);
		
		CloseableHttpResponse response = httpClient.execute(httpGet);
		try {
			int statusCode = response.getStatusLine().getStatusCode();
			if (statusCode >= 200 && statusCode < 300) {
				result = EntityUtils.toString(response.getEntity());
			}
			if (statusCode >= 500){
				result = "";
				System.err.println("服务器返回错误" + statusCode);
			}
		} finally {
			response.close();
		}
		httpClient.close();
		
		return result;
	}
	
	
/*	public static void main(String[] args) throws ClientProtocolException, IOException {
		GetInterface getInterface = new GetInterface();
		 System.out.println( getInterface.getData("http://192.168.6.155:9900/apt/system/area"));
	}
	*/
	
	public static void main(String[] args) throws ClientProtocolException, IOException {
		//		Simproxy proxy = new Simproxy();
		//		System.out.println(proxy.chatWithSimsimi("你好"));
		CloseableHttpClient httpClient = HttpClients.createDefault();
		String result = null;
		HttpGet httpGet = new HttpGet("http://192.168.3.55:8922/impala/access/info?rowkey=0001685586b1bc78dc69d490d29a9710");
		CloseableHttpResponse response = httpClient.execute(httpGet);
		try {
			int statusCode = response.getStatusLine().getStatusCode();
			if (statusCode >= 200 && statusCode < 300) {
				result = EntityUtils.toString(response.getEntity());
			}
		} finally {
			response.close();
		}
		httpClient.close();
		System.out.println(result);
	}


}
