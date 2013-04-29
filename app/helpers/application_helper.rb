module ApplicationHelper
	def make_header
		html = ""
		html << "<div class='row'>"
		html << "<div class='span12'>"
		html << "<div class='page-header'>"
		html << "<h1>DISH.IO</h1>"
		html << "<div class='search'>"
		html << "<input type=text name=user[full_name]>"
		html << "Search for people you trust"
		html << "</input></div></div>"
		html << make_login_toggle
		html << "</div></div>"
		html.html_safe
	end


	def make_login_toggle
		html = ""
		html << "<div class= 'log_in_toggle'>"

		if logged_in?
			html << (link_to current_user.username, user_path(current_user), class: "black")
			html << " | "
			html << (link_to 'Log out', session_path, method: :delete)
		else
			html << (link_to 'Sign up', signup_path)
			html << " | "
			html << (link_to 'Log in', login_path)
		end

		html << "</div>"
		html.html_safe
	end

	def flash_alerts
		html = ""

		if flash[:notice]
			html << "<div class='alert alert-notice'>#{flash[:notice]}</div>"
		end

		if flash[:error]
			if flash[:error].respond_to?(:each)
				flash[:error].each do |error|
					html << "<div class='alert alert-error'>#{error}</div>"
				end
			else
				html << "<div class='alert alert-error'>#{flash[:error]}</div>"
			end
		end

		html.html_safe
	end


end
