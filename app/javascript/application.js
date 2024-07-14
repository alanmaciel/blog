// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"

// To desactivate TurboDrive session:
// Turbo.session.drive = false
// To desactivate TurboDrive in a link:
// <%= link_to "No Turbo", some_path, data: { turbo: false } %>
// To desactivate TurboDrive in a form:
// <%= form_with(url: some_path, data: { turbo: false } do |f| )
// ...
// <% end %>
Turbo.setProgressBarDelay(10)
