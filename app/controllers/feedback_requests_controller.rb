class FeedbackRequestsController < ApplicationController
  respond_to :json
  respond_to :html, only: [:index]

  def index
    @feedback_requests = FeedbackRequest.all

    respond_to do |format|
      format.json { render json: @feedback_requests }
      format.html { render :index }
    end
  end

  def received
    @feedback_requests = current_user.received_feedback_requests
    render json: @feedback_requests
  end

  def sent
    @feedback_requests = current_user.sent_feedback_requests
    render json: @feedback_requests
  end

  def show
    @feedback_request = FeedbackRequest.find(params[:id])
    render json: @feedback_request
  end

  def create
    @feedback_request = FeedbackRequest.new(params[:feedback_request])

    if @feedback_request.save
      render json: @feedback_request
    else
      render json: @feedback_request.errors, status: 422
    end
  end 
end
