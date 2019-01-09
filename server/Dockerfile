FROM ruby:2.5.3

ENV LANG C.UTF-8
ENV APP_PATH="/root/app"
RUN cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    libfontconfig1 && \
    rm -rf /var/lib/apt/lists/*

ENV ENTRYKIT_VERSION 0.4.0

RUN wget https://github.com/progrium/entrykit/releases/download/v${ENTRYKIT_VERSION}/entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
    && tar -xvzf entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
    && rm entrykit_${ENTRYKIT_VERSION}_Linux_x86_64.tgz \
    && mv entrykit /bin/entrykit \
    && chmod +x /bin/entrykit \
    && entrykit --symlink

RUN mkdir $APP_PATH

WORKDIR $APP_PATH

COPY Gemfile Gemfile.lock ./
RUN bundle install --without production --jobs 4

ENTRYPOINT [ \
    "prehook", "ruby -v", "--", \
    "prehook", "rm -f tmp/pids/server.pid", \
    "prehook", "bundle install -j4 --without production", "--"]
