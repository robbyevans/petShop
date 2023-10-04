class PetsController < ApplicationController
  skip_before_action :verify_authenticity_token
  # INDEX: List all pets
  def index
    pets = Pet.all
    render json: pets, only: display_attributes, status: :ok
  end

  # SHOW: Display details of a specific pet
  def show
    pet = Pet.find_by(id: params[:id])
    if pet
      render json: pet, status: :ok
    else
      render json: { error: 'Pet not found' }, status: :not_found
    end
  end

  # CREATE: Create a new pet
  def create
    pet = Pet.new(pet_params)
    if pet.save
      render json: pet, status: :created
    else
      render json: { errors: pet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # UPDATE: Update details of a specific pet
  def update
    pet = Pet.find(params[:id])
    if pet.update(pet_params)
      render json: pet, status: :ok
    else
      render json: pet.errors, status: :unprocessable_entity
    end
  end

  # DESTROY: Delete a specific pet
  def destroy
    pet = Pet.find(params[:id])
    if pet.destroy
      render json: { message: 'Pet successfully deleted' }, status: :ok
    else
      render json: { error: 'Failed to delete the pet' }, status: :unprocessable_entity
    end
  end

  private
  
  # display_attributes
  def display_attributes
    [:id, :name, :description, :image]
  end

  # Strong parameters: Only allow specific fields to be passed in
  def pet_params
    params.require(:pet).permit(:name, :description, :image)
  end


end
