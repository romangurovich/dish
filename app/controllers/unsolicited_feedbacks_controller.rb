class UnsolicitedFeedbacksController < ApplicationController
  def index
    @unsolicited_feedbacks = UnsolicitedFeedback.where("recipient_id = ?", params[:user_id])
    render json: @unsolicited_feedbacks
  end

  def sent
    @unsolicited_feedbacks = UnsolicitedFeedback.where("author_id = ?", current_user.id)
    render json: @unsolicited_feedbacks
  end

  def show
    @unsolicited_feedback = UnsolicitedFeedback.find(params[:id])

    render json: @unsolicited_feedback
  end

  def create
    @unsolicited_feedback = UnsolicitedFeedback.new(params[:unsolicited_feedback])

    if @unsolicited_feedback.save
      render json: @unsolicited_feedback
    else
      render json: @unsolicited_feedback.errors, status: 422
    end
  end
end
