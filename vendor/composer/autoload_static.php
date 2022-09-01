<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit796ee85e84738426fe8c358e7191ba80
{
    public static $prefixLengthsPsr4 = array (
        'V' => 
        array (
            'VariableAnalysis\\' => 17,
        ),
        'G' => 
        array (
            'GB\\' => 3,
        ),
        'D' => 
        array (
            'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 55,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'VariableAnalysis\\' => 
        array (
            0 => __DIR__ . '/..' . '/sirbrillig/phpcs-variable-analysis/VariableAnalysis',
        ),
        'GB\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
            1 => __DIR__ . '/../..' . '/includes',
        ),
        'Dealerdirect\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dealerdirect/phpcodesniffer-composer-installer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'GB\\Setup' => __DIR__ . '/../..' . '/includes/class-setup.php',
        'Spawn\\Block' => __DIR__ . '/../..' . '/includes/class-block.php',
        'Spawn\\Blocks' => __DIR__ . '/../..' . '/includes/class-blocks.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit796ee85e84738426fe8c358e7191ba80::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit796ee85e84738426fe8c358e7191ba80::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit796ee85e84738426fe8c358e7191ba80::$classMap;

        }, null, ClassLoader::class);
    }
}