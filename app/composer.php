<?php

View::composer(['layouts.default', 'home.*', 'user.show', 'user.password', 'admin.*', 'permissions.*'], 'Segfault\Composer\UserComposer');
