class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  # GET /flights
  # GET /flights.json
  def index
    if params[:q_origin]
      @flights = Flight.where('origin ilike ?', "%#{params[:q_origin]}%")
      @flights = @flights.distinct
    elsif params[:q_destination]
      @flights = Flight.where('origin ilike ?', "%#{params[:q_destination]}%")
      # Tarun not sure about this line, check
      @flights = @flights.distinct
    elsif params[:q_id]
      binding.pry
      @flights = Flight.where(id:'#{params[:q_id]}')
    else
      @flights = Flight.all.includes(:plane)
    end
    @flights = @flights.order(date_departed: :asc)
      respond_to do |format|
      format.html
      format.json { render :json => @flights, :include => :plane }
    end
  end

  # GET /flights/1
  # GET /flights/1.json
  def search
    f = Flight.where({ origin: params[:origin_name], destination: params[:destination_name]})
    respond_to do |format|
      format.html
      format.json { render :json => f}
    end
  end


  def show
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
 def create
    flight = Flight.create(:call_sign => params[:call_sign],
      :origin => params[:origin],
      :destination => params[:destination],
      :plane_id => params[:plane_id],
      :date_departed => params[:date_departed],
      :time_departed => params[:time_departed],
      :date_arrived => params[:date_arrived],
      :time_arrived => params[:time_arrived])
    flight.save
    render :json => flight
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params[:flight]
    end
end
