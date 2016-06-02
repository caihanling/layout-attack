package zx.soft.data.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zx.soft.data.source.GetInterface;

public class AttackServlet extends HttpServlet {

	/**
	 * 
	 */
	GetInterface getInterface = new GetInterface();

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

		response.setCharacterEncoding("UTF-8");
		response.setHeader("Access-Control-Allow-Origin", "*");
		PrintWriter writer = response.getWriter();
		String result1 = getInterface.getData("http://192.168.6.155:9900/apt/tracker");
		writer.print(result1);
		
		System.err.println(result1.length());
	}

}
