使用方法：
	1.	需要安装node / mongoDB    https://www.mongodb.com/ 安装

	启动数据库:
		找到C:\Program Files\MongoDB\Server\3.4\bin

		.\mongod --dbpath=数据库存放的位置 --port=27017 
	
	2.	使用npm install 安装依赖项

	3.	npm run dev  运行服务

	4.	在http://localhost:88 访问

	npm i nrm -g

	nrm test  查看哪个速度快

	nrm use cnpm  切换镜像

	


功能： 登陆/注册/文件上传/简易微博(添加、删除、分页、点赞、踩)


用户登录/注册： api/user/login   api/user/register
	post  
		username: xxx
		password: xxx
	return
		{code:0,msg:提示信息}

		code:0 成功
		code:1 失败


weibo
添加数据：  /weibo
	get
		act		add
		content		输入的内容
	return
		code   0为成功
		msg	   提示信息
		id		返回id
		time	返回时间戳

获取页码：  /weibo
	get
		act		get_page_count
		
	return
		code   0为成功
		msg	   提示信息
		count	页码

获取数据：  /api/weibo
	get
		act		get
		page	页码
	return
		数据数组
		若失败：
			code   错误码
			msg	   提示信息
		

点赞：  /api/weibo
	get
		act		like
		id		id
	return
		code   0为成功
		msg	   提示信息

踩：  /weibo
	get
		act		dislike
		id		id
	return
		code   0为成功
		msg	   提示信息

删除：   /weibo
	get
		act		del
		id		id
	return
		code   0为成功
		msg	   提示信息
