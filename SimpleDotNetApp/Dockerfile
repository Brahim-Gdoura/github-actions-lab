# Stage 1: Build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

# Copy all files and publish the app
COPY . ./
RUN dotnet publish -c Release -o out

# Stage 2: Runtime image
FROM mcr.microsoft.com/dotnet/runtime:8.0
WORKDIR /app
COPY --from=build /app/out ./

# Set entrypoint
ENTRYPOINT ["dotnet", "SimpleDotNetApp.dll"]
