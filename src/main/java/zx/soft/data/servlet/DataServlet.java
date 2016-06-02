package zx.soft.data.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zx.soft.data.model.TransResult;
import zx.soft.data.source.GetInterface;
import zx.soft.utils.json.JsonUtils;

public class DataServlet extends HttpServlet {

	GetInterface getInterface = new GetInterface();

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

		TransResult transResult = new TransResult();
		response.setCharacterEncoding("UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		PrintWriter writer = response.getWriter();
		                                                             
		String result1 = getInterface.getData("http://192.168.3.55:9900/apt/system/area");
		//writer.print(result1);
		
		String result2 = getInterface.getData("http://192.168.3.55:9900/apt/system/assets");
		//writer.print(result2);
		
		
		String result3 = getInterface.getData("http://192.168.3.55:9900/apt/tracker");
		//writer.print(result3);
		
		transResult.setArea(result1);
		transResult.setAssets(result2);
		transResult.setAttack(result3);
		writer.print(JsonUtils.toJson(transResult));
		
		
		
		System.err.println(transResult.toString());
		
		
	}

}
