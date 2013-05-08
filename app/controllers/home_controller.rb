class HomeController < ApplicationController
  skip_before_filter :require_login, only: [:hello]

  def hello
  end
end
