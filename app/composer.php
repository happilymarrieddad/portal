<?php

View::composer(['layouts.default', 'home.*', 'user.*'], 'Segfault\Composer\UserComposer');
