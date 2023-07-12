class MessageController < ApplicationController
  def random_message
    @random_message = Message.all.sample
    render json: { message: @random_message.content }
  end
end
