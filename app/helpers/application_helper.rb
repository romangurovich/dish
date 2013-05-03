module ApplicationHelper
	def make_header
		html = ""
		html << "<div class='navbar navbar-fixed-top dish-header'>"
		html << "<div class='navbar-inner'>"
		html << "<h1>DISH.IO</h1>"
		html << "<div class='pull-left searchy'>"
		html << '<input class="typeahead tt-query user-search" type="text" placeholder="Search for people you trust" autocomplete="off" spellcheck="false" dir="auto">'
		html << "</div>"
		html << make_login_toggle
		html << "</div></div>"
		html.html_safe
	end

	def make_login_toggle
		html = ""
		html << "<div class= 'log_in_toggle pull-right'>"

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
