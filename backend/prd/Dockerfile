FROM ruby:3.1

ARG RUBYGEMS_VERSION=3.3.20
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# RubyGemsをアップデート
RUN gem update --system ${RUBYGEMS_VERSION} && \
    bundle install --without test development

COPY . /app
EXPOSE 3000

CMD ["/bin/sh", "-c", "bundle exec rails db:create && bundle exec rails db:migrate && bundle exec unicorn -p 3000 -c /app/config/unicorn.rb -E production"]