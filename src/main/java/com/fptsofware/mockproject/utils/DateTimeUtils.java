package com.fptsofware.mockproject.utils;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class DateTimeUtils {
	public static String getCurrentDate()
	{
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
		LocalDateTime now = LocalDateTime.now();
		return dtf.format(now).toString();
	}
	
	public java.sql.Date getCurrentDateTime()
	{
		return new java.sql.Date(new java.util.Date().getTime());
	}
}
