package com.fptsofware.mockproject.utils;

import javax.servlet.http.HttpServletRequest;

public class Utitily {

	public static String getSiteURL(HttpServletRequest request) {
		String siteURL = request.getRequestURL().toString();
		return siteURL.replace(request.getServletPath(),"");
	}
}
