class SolicitedFeedbacksController < ApplicationController
   def index
    @solicited_feedbacks = SolicitedFeedback.where("feedback_request_id = ?", params[:feedback_request_id])
    render json: @solicited_feedbacks
  end

  def show
    @solicited_feedback = SolicitedFeedback.find(params[:id])

    render json: @solicited_feedback
  end

  def create
    @solicited_feedback = SolicitedFeedback.new(params[:solicited_feedback])

    if @solicited_feedback.save
      render json: @solicited_feedback
    else
      render json: @solicited_feedback.errors, status: 422
    end
  end
end
