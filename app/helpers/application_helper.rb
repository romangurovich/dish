module ApplicationHelper
	def make_header
		html = ""
		html << "<div class='navbar navbar-fixed-top dish-header'>"
		html << "<div class='navbar-inner'>"
		html << "<h1>"
		html << "<a class='page-title' href='" + root_url.html_safe + "'>DISH.IO</a>"
		html << make_avatar
		html << "</h1>"
		html << "<div class='pull-left searchy'>"
		html << '<input class="user-search" type="text" placeholder="Search for people you trust" data-provide: "typeahead" spellcheck="false" dir="auto">'
		html << "</div>"
		html << make_login_toggle
		html << "</div></div>"
		html.html_safe
	end

	def make_login_toggle
		html = ""
		html << "<div class= 'log_in_toggle pull-right btn-group'>"
		if logged_in?
			html << (link_to current_user.username, edit_user_path(current_user), class: "btn btn-success")
			html << (link_to 'Log out <i class="icon-off"></i>'.html_safe, session_path, method: :delete, class: "btn")
		else
			html << (link_to 'Sign up', signup_path, class: "btn")
			html << (link_to 'Log in', login_path, class: "btn")
		end

		html << "</div>"
		html.html_safe
	end

	def make_avatar
		pic = logged_in? ? (image_tag current_user.avatar.url(:thumb)) : ""

		html = ""
		html << "<div class='avatar-top'>"
		html << pic.html_safe
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
