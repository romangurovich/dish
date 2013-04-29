class TeamsController < ApplicationController
	respond_to :json
	respond_to :html, only: [:index]

	def index
		@teams = Team.all

		respond_to do |format|
			format.json { render json: @teams }
			format.html { render :index }
		end
	end

	def show
		@team = Team.find(params[:id])
		render json: @team
	end

	def create
		@team = Team.new(params[:team])

		if @team.save
			render json: @team
		else
			render json: @team.errors, status: 422
		end
	end 
end
