# syntax=docker/dockerfile:1
FROM ruby:3.0
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm i -g yarn

WORKDIR /app
RUN yarn set version berry

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . .

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]

