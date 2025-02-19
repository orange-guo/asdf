import{_ as a,c as n,o as p,ag as e}from"./chunks/framework.CkHWihve.js";const f=JSON.parse('{"title":"すべてのコマンド","description":"","frontmatter":{},"headers":[],"relativePath":"ja-jp/manage/commands.md","filePath":"ja-jp/manage/commands.md","lastUpdated":1738767514000}'),l={name:"ja-jp/manage/commands.md"};function t(i,s,o,c,r,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="すべてのコマンド" tabindex="-1">すべてのコマンド <a class="header-anchor" href="#すべてのコマンド" aria-label="Permalink to &quot;すべてのコマンド&quot;">​</a></h1><p><code>asdf</code>で利用可能なすべてのコマンドの一覧です。この一覧は、<code>asdf help</code>コマンドで表示されるテキストです。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MANAGE PLUGINS</span></span>
<span class="line"><span>asdf plugin add &lt;name&gt; [&lt;git-url&gt;]      Add a plugin from the plugin repo OR,</span></span>
<span class="line"><span>                                        add a Git repo as a plugin by</span></span>
<span class="line"><span>                                        specifying the name and repo url</span></span>
<span class="line"><span>asdf plugin list [--urls] [--refs]      List installed plugins. Optionally show</span></span>
<span class="line"><span>                                        git urls and git-ref</span></span>
<span class="line"><span>asdf plugin list all                    List plugins registered on asdf-plugins</span></span>
<span class="line"><span>                                        repository with URLs</span></span>
<span class="line"><span>asdf plugin remove &lt;name&gt;               Remove plugin and package versions</span></span>
<span class="line"><span>asdf plugin update &lt;name&gt; [&lt;git-ref&gt;]   Update a plugin to latest commit on</span></span>
<span class="line"><span>                                        default branch or a particular git-ref</span></span>
<span class="line"><span>asdf plugin update --all                Update all plugins to latest commit on</span></span>
<span class="line"><span>                                        default branch</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MANAGE TOOLS</span></span>
<span class="line"><span>asdf current                            Display current version set or being</span></span>
<span class="line"><span>                                        used for all packages</span></span>
<span class="line"><span>asdf current &lt;name&gt;                     Display current version set or being</span></span>
<span class="line"><span>                                        used for package</span></span>
<span class="line"><span>asdf help &lt;name&gt; [&lt;version&gt;]            Output documentation for plugin and tool</span></span>
<span class="line"><span>asdf install                            Install all the package versions listed</span></span>
<span class="line"><span>                                        in the .tool-versions file</span></span>
<span class="line"><span>asdf install &lt;name&gt;                     Install one tool at the version</span></span>
<span class="line"><span>                                        specified in the .tool-versions file</span></span>
<span class="line"><span>asdf install &lt;name&gt; &lt;version&gt;           Install a specific version of a package</span></span>
<span class="line"><span>asdf install &lt;name&gt; latest[:&lt;version&gt;]  Install the latest stable version of a</span></span>
<span class="line"><span>                                        package, or with optional version,</span></span>
<span class="line"><span>                                        install the latest stable version that</span></span>
<span class="line"><span>                                        begins with the given string</span></span>
<span class="line"><span>asdf latest &lt;name&gt; [&lt;version&gt;]          Show latest stable version of a package</span></span>
<span class="line"><span>asdf latest --all                       Show latest stable version of all the</span></span>
<span class="line"><span>                                        packages and if they are installed</span></span>
<span class="line"><span>asdf list &lt;name&gt; [version]              List installed versions of a package and</span></span>
<span class="line"><span>                                        optionally filter the versions</span></span>
<span class="line"><span>asdf list all &lt;name&gt; [&lt;version&gt;]        List all versions of a package and</span></span>
<span class="line"><span>                                        optionally filter the returned versions</span></span>
<span class="line"><span>asdf set [-u] [-p] &lt;name&gt; &lt;versions...&gt; Set a tool version in a .tool-version in</span></span>
<span class="line"><span>                                        the current directory, or a parent</span></span>
<span class="line"><span>                                        directory.</span></span>
<span class="line"><span>asdf uninstall &lt;name&gt; &lt;version&gt;         Remove a specific version of a package</span></span>
<span class="line"><span>asdf where &lt;name&gt; [&lt;version&gt;]           Display install path for an installed</span></span>
<span class="line"><span>                                        or current version</span></span>
<span class="line"><span>asdf which &lt;command&gt;                    Display the path to an executable</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>UTILS</span></span>
<span class="line"><span>asdf exec &lt;command&gt; [args...]           Executes the command shim for current version</span></span>
<span class="line"><span>asdf env &lt;command&gt; [util]               Runs util (default: \`env\`) inside the</span></span>
<span class="line"><span>                                        environment used for command shim execution.</span></span>
<span class="line"><span>asdf info                               Print OS, Shell and ASDF debug information.</span></span>
<span class="line"><span>asdf version                            Print the currently installed version of ASDF</span></span>
<span class="line"><span>asdf reshim &lt;name&gt; &lt;version&gt;            Recreate shims for version of a package</span></span>
<span class="line"><span>asdf shimversions &lt;command&gt;             List the plugins and versions that</span></span>
<span class="line"><span>                                        provide a command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RESOURCES</span></span>
<span class="line"><span>GitHub: https://github.com/asdf-vm/asdf</span></span>
<span class="line"><span>Docs:   https://asdf-vm.com</span></span></code></pre></div>`,3)]))}const m=a(l,[["render",t]]);export{f as __pageData,m as default};
