class ApplicationController < ActionController::Base
  protect_from_forgery
  include SessionsHelper

  before_filter :require_login
 
  private
 
  def require_login
    unless logged_in?
      redirect_to hello_url
    end
  end
end
